import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react-icons/Bs",
        "react-icons/Si",
        "react-icons/Hi",
        "react-icons/Ai",
      ],
    },
  },
});
