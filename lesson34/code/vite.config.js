import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react({ include: /\.(js|jsx)$/ })],
  server: {
    port: process.env.PORT || 3000,
    open: true,
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  }
});