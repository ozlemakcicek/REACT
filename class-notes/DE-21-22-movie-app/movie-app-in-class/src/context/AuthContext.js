import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { createContext } from "react";
import { auth } from "../auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

export const AuthContex = createContext();

const AuthContextProvider = ({ children }) => {
  const createUser = async (email, password) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toastSuccessNotify("Registered succesfully")
      console.log(userCredential);
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.mesage)
    }
  };

  const values = { createUser };
  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};

export default AuthContextProvider;
