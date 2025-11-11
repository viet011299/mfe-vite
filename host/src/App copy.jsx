import React, { lazy, Suspense } from "react";
import VueWrapperHost from './wrapper/VueWrapperHost'

// const RemoteButton = lazy(() => import("remoteReact/Button"));
const VueWrapper = lazy(() => import("remoteVue/VueWrapper"));
const router = lazy(() => import("remoteVue/router"));
const AppVue = lazy(() => import("remoteVue/App"));
function App() {
  const handleEvent = (event, data) => console.log("Event:", event, data);
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        🚀 Host App - Module Federation
      </h1>
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
        <Suspense fallback={<div>Loading...</div>}>
          <VueWrapperHost
            initialRoute="/" // Sẽ nav khi mount
            onVueEvent={handleEvent}
            vueProps={{ user: "Passed from React" }}
            router={router} // ← Pass router instance
            vueApp={AppVue}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
