import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [tailwindcss(), svgr()],
});
