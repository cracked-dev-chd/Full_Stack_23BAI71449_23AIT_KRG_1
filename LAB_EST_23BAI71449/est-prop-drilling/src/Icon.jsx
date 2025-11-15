import React from "react";
import UserProfile from "./UserProfile";

function Icon({ username }) {
  return (
    <div>
      <p>Icon Component</p>
      <UserProfile username={username} />
    </div>
  );
}

export default Icon;
