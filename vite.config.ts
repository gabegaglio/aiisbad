import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aiisbad/", // 👈 This is the important part
  plugins: [react(), tailwindcss()],
});
