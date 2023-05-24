import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react-icons/bs",
        "react-icons/si",
        "react-icons/hi",
        "react-icons/ai",
      ],
    },
  },
});
