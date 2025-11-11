import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";
import { federation } from "@module-federation/vite";
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        // remoteReact: "http://localhost:5001/assets/remoteEntry.js",
        remoteVue: {
          type: "module",
          name: "remoteVue",
          entry: "http://localhost:5002/remoteEntry.js",
          entryGlobalName: "remoteVue",
          shareScope: "default",
        },
      },
      shared: ["react", "react-dom", "vue", "vue-router", "pinia"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000,
  },
});
