import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: "remoteVue",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./VueWrapper": "./src/VueWrapper.jsx",
        "./App": "./src/App.vue",
        "./router": "./src/router.js",
      },
      shared: ["vue", "react", "react-dom", "vue-router", "pinia"],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5002,
  },
});
