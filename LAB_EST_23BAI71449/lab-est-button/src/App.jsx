import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* Centered card container */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>
          Akshit Gautam - UID: 23BAI71449
        </h2>

        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Count: {count}
        </h1>

        <button
          onClick={handleIncrement}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default CounterApp;