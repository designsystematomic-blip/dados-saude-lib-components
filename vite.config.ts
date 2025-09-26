import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      exclude: ["lib/**/*.stories.tsx"],
      rollupTypes: false,
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
      "@components": resolve(__dirname, "./lib/components"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      name: "@amandapratesc/dados-saude-lib-components",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: "style",
    },
  },
});
