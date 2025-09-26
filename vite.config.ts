import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { glob } from "glob";
import { fileURLToPath } from "url";
import { extname, relative } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      exclude: ["lib/**/*.stories.tsx", "lib/**/*.test.tsx", "node_modules"],
      rollupTypes: false,
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es", "cjs"],
      name: "DadosSaudeLibComponents",
      fileName: "main",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts", "lib/**/*.stories.tsx"],
          })
          .map((file) => [
            relative("lib", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "lib",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        exports: "named",
      },
    },
  },
});
