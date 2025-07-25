import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          utility: ['cobe'], // Add any heavy visualizer libraries
        },
      },
    },
    chunkSizeWarningLimit: 600, // Optional: silence large chunk warnings
  },
});
