import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";

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
          src: "src/index.html",
          dest: "dist"
        }
      ]
    }),
    typescript(),
    scss({
      output: "dist/bundle.css",
      outFile: "dist/bundle.css",
      outputStyle: production ? "compressed" : "expanded",
      sourceMap: !production
    }),
    production && terser()
  ]
};
