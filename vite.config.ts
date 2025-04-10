import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

const conditionalPlugins: [string, Record<string, any>][] = [];

// @ts-ignore
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "development"
      ? "/"
      : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    // Reduce the scope of dependency optimization
    entries: ["src/main.tsx"],
    esbuildOptions: {
      // Disable tree shaking during dev to reduce memory usage
      treeShaking: false,
    },
  },
  build: {
    // Reduce memory usage during build
    minify: "esbuild",
    // Limit the number of worker threads
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
    tempo(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
    hmr: {
      // Reduce memory usage for HMR
      overlay: false,
    },
    // Limit the number of worker threads
    fs: {
      strict: false,
    },
  },
});
