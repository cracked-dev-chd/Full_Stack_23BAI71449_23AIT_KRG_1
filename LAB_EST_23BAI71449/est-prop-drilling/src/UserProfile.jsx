import React from "react";

function UserProfile({ username }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <h3>User Profile</h3>
      <p style={{ fontSize: "20px" }}>Username: {username}</p>
    </div>
  );
}

export default UserProfile;
