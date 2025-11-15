import React from "react";
import Icon from "./Icon";

function Header({ username }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Header Component</h2>
      <Icon username={username} />
    </div>
  );
}

export default Header;
