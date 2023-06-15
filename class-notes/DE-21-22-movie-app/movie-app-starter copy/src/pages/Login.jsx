
//!login sayfasi da register sayfasinin hemen hemen aynisi oldugu icin aynisini alip getirip buraya kopyaladik ve dizenlemelerimizi yapiyoruiz.email ve password a ihtiyacimiz var firstName lastName i siliyoruz..createUser degil sign in in methodunun degiskenini kullanacagiz Context dosyasinda olusturduktan sonra.handlesubmiti kullanacagiz kalsin.Sign up degil Sign in sayfasi olacak burasi onu duzeltelim.simdi AuthContextde login methodunu kullan ve burda gelip uygula.once contextden value olarak gonderilen signIn i cek.sonra handleSubmitte parametre gonder 

import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContex } from "../context/AuthContext";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {signIn, signUpProvider,forgotPassword  } = useContext(AuthContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email,password)
    
  };
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form
          className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]"
          onSubmit={handleSubmit}
        >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign In
          </h2>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_email"
              id="email"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="password"
              id="password"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          {/* login sayfasinda bir forgot password yazisi(bunu daha sonra onclick yapinca suraya yonlendir seklinde yapacagiz) birde Sign up linki var.bunlari olusturalim */}

          //?forgotPassword icin spanine onClick ile methodu cagirip icine email yazalim ve yukarida da useContex icinden cekelim
          <div className="flex justify-between">
            <span className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
            onClick={()=>forgotPassword(email)}>
              Forgot Password
            </span>
            <Link
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
              to="/register"
            >
              Sign Up
            </Link>
          </div>

          <button className="btn-danger" type="submit">
            Login
          </button>

          {/* signUpProvider degiskeni icinde3 tanimlanan google ile cagirma methodlarini isleyelim.icine birsey yazmiyoruz cunku google dan aliyor bilgileri.yukarida contex icinden cekelim yaliniz */}
          <button
            className="btn-danger-bordered flex justify-between items-center"
            type="button"
            onClick={()=>signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
