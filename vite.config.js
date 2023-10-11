// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

//Original Code
//// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// vite.config.ts;

// Github solution for global is not defined
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import process from "dotenv";

// export default defineConfig({
//   define: {
//     global: {},
//     ...(process.env.NODE_ENV === "development" && {
//       global: {},
//     }),
//   },
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "./src/setupTests.ts",
//   },
// });
