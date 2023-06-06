import React from 'react';




const UserItem = ({ user }) => {
  console.log('USERITEM COMPONENT RENDERED');
  return (
    <div className="useritem">
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${user?.id}.svg`}
        alt="random-user"
      />
      {user.name}
    </div>
  );
};

export default UserItem;
