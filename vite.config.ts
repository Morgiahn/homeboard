import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // server: {
  //   proxy: {
  //     "/guardian": "http://192.168.1.61:9001",
  //   }
  // }
})