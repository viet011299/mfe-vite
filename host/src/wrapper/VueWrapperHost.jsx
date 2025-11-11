import React, { useEffect, useRef, useState, Suspense } from "react";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueApp from "remoteVue/App";
/**
 * VueWrapperHost - Dynamic import dựa trên path props
 * Props mới:
 * - routerPath: String path expose (e.g., "./router") → tự import & use
 * - appPath: String path expose (e.g., "./App") → tự import component
 * - storePath: Optional path cho pinia store (nếu cần dynamic)
 */
const VueWrapperHost = ({
  initialRoute = "/",
  onVueEvent = null,
  vueProps = {},
  className = "",
  style = {},
}) => {
  const vueContainer = useRef(null);
  const appRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const mountVueApp = async () => {
      if (vueContainer.current && appRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        // Dynamic import App component từ path

        // Tạo Vue app
        const app = createApp(VueApp, {
          ...vueProps,
          onEmit: (eventName, data) => onVueEvent?.(eventName, data),
        });

        // Setup Pinia (nếu có storePath)
        // const pinia = createPinia();
        // app.use(pinia);

        // const { default: RouterModule } = await import("remoteVue/router");
        // const routerInstance = RouterModule.default || RouterModule; // Adjust nếu factory
        // app.use(routerInstance);
        // // Dynamic import Router từ path

        // // Navigate initial route
        // if (initialRoute && initialRoute !== "/") {
        //   await routerInstance.push(initialRoute).catch(console.error);
        //   console.log("🧭 Navigated via path-loaded router:", initialRoute);
        // }

        // // Error handler & bridge (giữ nguyên)
        // app.config.errorHandler = (err, instance, info) => {
        //   console.error("Vue Error:", err, instance, info);
        //   if (mounted) setError(err.message);
        // };
        // app.provide("reactBridge", {
        //   emit: (eventName, data) => onVueEvent?.(eventName, data),
        // });

        // console.log("🚀 Mounting...");

        // Mount
        appRef.current = app;
        app.mount(vueContainer.current);

        if (mounted) {
          setIsLoading(false);
          setIsReady(true);
          console.log("🎉 Mounted with dynamic paths!");
        }
      } catch (err) {
        if (mounted) {
          setError(`Path load failed: ${err.message}. Check remote exposes.`);
          setIsLoading(false);
        }
      }
    };

    mountVueApp();

    return () => {
      mounted = false;
      if (appRef.current) {
        try {
          appRef.current.unmount();
        } catch (err) {
          console.error("Unmount error:", err);
        }
        appRef.current = null;
      }
    };
  }, [initialRoute, vueProps]); // Re-run nếu path thay đổi

  // Prop updates & UI (loading/error/success) giữ nguyên như code trước
  useEffect(() => {
    if (isReady && appRef.current) {
      console.log("📊 Props updated:", vueProps);
    }
  }, [vueProps, isReady]);

  if (isLoading) {
    return (
      <div
        className={className}
        style={{
          padding: "40px",
          textAlign: "center",
          color: "#666",
          ...style,
        }}
      >
        <div
          style={
            {
              /* spinner CSS */
            }
          }
        />
        <p>Loading ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={className}
        style={{ color: "#d32f2f", padding: "20px", ...style }}
      >
        <h3>❌ Error: {error}</h3>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      <Suspense fallback={<div>Loading...</div>}>
        <div ref={vueContainer} />
      </Suspense>
    </div>
  );
};

export default VueWrapperHost;
