import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import typescript from "@rollup/plugin-typescript";

const production = process.env.NODE_ENV === "production";

export default {
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: !production
  },
  plugins: [
    copy({
      targets: [
        {
          src: "index.html",
          dest: "../dist"
        },
        {
          src: "node_modules/materialize-css/dist/css/materialize.min.css",
          dest: "dist"
        }
      ]
    }),
    typescript(),
    production && terser()
  ]
};
