import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remoteVue",
      filename: "remoteEntry.js",
      exposes: {
        "./VueWrapper": "./src/VueWrapper.jsx",
      },
      shared: ["vue", "react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5002,
  },
});
