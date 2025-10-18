import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change 'property-website' to your repo name!
export default defineConfig({
  plugins: [react()],
  base: "/property-website/",
});
