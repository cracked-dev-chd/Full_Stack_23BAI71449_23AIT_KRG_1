import React from "react";
import Header from "./Header";

function App() {
  const username = "Akshit Gautam";

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <Header username={username} />
    </div>
  );
}

export default App;
