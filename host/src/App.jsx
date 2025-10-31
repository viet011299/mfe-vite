import React, { lazy, Suspense } from "react";

const RemoteButton = lazy(() => import("remoteReact/Button"));
const VueWrapper = lazy(() => import("remoteVue/VueWrapper"));

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        🚀 Host App - Module Federation
      </h1>

      <div
        style={{
          display: "grid",
          gap: "30px",
          maxWidth: "1200px",
          margin: "40px auto",
        }}
      >
        {/* React Remote Component */}
        <div
          style={{
            background: "#f0f9ff",
            padding: "30px",
            borderRadius: "12px",
            border: "2px solid #3b82f6",
          }}
        >
          <h2 style={{ color: "#1e40af" }}>📦 React Remote Component</h2>
          <p style={{ color: "#64748b" }}>From: http://localhost:5001</p>
          <Suspense fallback={<div>Loading...</div>}>
            <RemoteButton />
          </Suspense>
        </div>

        {/* Vue Remote Component */}
        <div
          style={{
            background: "#f0fdf4",
            padding: "30px",
            borderRadius: "12px",
            border: "2px solid #10b981",
          }}
        >
          <h2 style={{ color: "#059669" }}>📦 Vue Remote Component</h2>
          <p style={{ color: "#64748b" }}>From: http://localhost:5002</p>
          <Suspense fallback={<div>Loading...</div>}>
            <VueWrapper />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
