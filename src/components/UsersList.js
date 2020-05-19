import React from "react";
import User from "./User";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((item) => (
        <User key={item.id} name={item.name} />
      ))}
    </ul>
  );
};

export default UsersList;
