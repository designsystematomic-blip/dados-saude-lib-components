import { glob } from "glob";
import { defineConfig } from "vite";
import path, { resolve } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
    viteStaticCopy({
      targets: [
        { src: "lib/assets/*", dest: "assets" },
        { src: "lib/styles/*", dest: "styles" },
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@src",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "@lib",
        replacement: path.resolve(__dirname, "./lib"),
      },
    ],
  },
  build: {
    copyPublicDir: false,
    cssCodeSplit: false,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      name: "@amandapratesc/dados-saude-lib-components",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: "style",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      experimentalCacheExpiry: 20,
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts"],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            path.relative(
              "lib",
              file.slice(0, file.length - path.extname(file).length)
            ),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "styles/[name][extname]";
          return "assets/[name][extname]";
        },
        // globals: {
        //   react: "React",
        //   "react-dom": "ReactDOM",
        // },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
