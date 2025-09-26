import { build, defineConfig, esbuildVersion, optimizeDeps } from "vite";
import path, { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { fileURLToPath } from "url";

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

// const buildProduction = {
//   lib: {
//     entry: resolve(__dirname, "lib/main.ts"),
//     formats: ["es"],
//     name: "@amandapratesc/dados-saude-lib-components",
//     fileName: (format: any, entryName: any) => `${entryName}.${format}.js`,
//     cssFileName: "style",
//   },
//   rollupOptions: {
//     external: ["react", "react-dom"],
//     output: {
//       globals: {
//         react: "React",
//         "react-dom": "ReactDOM",
//       },
//     },
//   },
// };

// const pluginsProduction = [
//   react(),
//   dts({
//     include: ["lib"],
//     exclude: ["lib/**/*.stories.tsx"],
//   }),
//   libInjectCss(),
// ];

// const defineConfigRaw = defineConfig((props): any => {
//   const { command, mode } = props;

//   const isDev = mode === "development";
//   const isWatch = command === "build" && isDev;

// if (isWatch) {
//   console.log("Building in watch mode...");
//   return {
//     plugins: [react(), libInjectCss()],
//     build: {
//       copyPublicDir: false,
//       cssCodeSplit: false,
//       emptyDir: false,
//       sourcemap: false,
//       watch: {
//         include: ["lib/**"],
//         exclude: ["node_modules/**", "lib/**/*.stories.tsx"],
//         clearScreen: false,
//         buildDelay: 300,
//       },
//       lib: {
//         entry: resolve(__dirname, "lib/main.ts"),
//         formats: ["es"],
//         name: "@amandapratesc/dados-saude-lib-components",
//         fileName: (format: any, entryName: any) =>
//           `${entryName}.${format}.js`,
//       },
//       rollupOptions: {
//         external: ["react", "react-dom", "react/jsx-runtime"],
//         output: {
//           inlineDynamicImports: true,
//           entryFileNames: `[name].js`,
//         },
//         threeshake: false,
//         experimentalCacheExpiry: 20,
//       },
//     },
//     resolve: {
//       alias: [
//         { find: "@", replacement: resolve(__dirname, "./") },
//         {
//           find: "@components",
//           replacement: path.resolve(__dirname, "./lib"),
//         },
//       ],
//     },
//     optimizeDeps: {
//       exclude: ["lib"],
//     },
//     server: {
//       watch: {
//         usePolling: true,
//         interval: 100,
//       },
//     },
//     esbuild: {
//       keepNames: true,
//     },
//   };
// }

//   // Production build
//   return {
//     build: buildProduction,
//     resolve,
//     plugins: pluginsProduction,
//     optimizeDeps: {
//       exclude: ["lib"],
//     },
//   };
// });

// export default defineConfigRaw;
