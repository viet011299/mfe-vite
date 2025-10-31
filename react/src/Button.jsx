import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          border: "none",
          padding: "15px 40px",
          fontSize: "18px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Click Me! 🎯
      </button>
      <p
        style={{
          marginTop: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Clicked: {count} times
      </p>
    </div>
  );
}

export default Button;
