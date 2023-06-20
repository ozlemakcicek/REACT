import React from "react";
import UserItem from "./UserItem";
import { memo } from "react";

const Users = ({kisiler}) => {
  console.log("USERS COMPONENT RENDERED");

  return (
    <div className="users">


      {kisiler.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default memo(Users);
