import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const output = {
  file: pkg.main,
  format: "umd",
  sourcemap: true,
  globals: {
    jquery: "$",
  },
};

export default {
  input: "src/furtive.js",
  output: [
    output,
    {
      ...output,
      file: pkg.main.replace(/.js$/, ".min.js"),
      plugins: [terser()],
    },
  ],
  plugins: [json()],
  external: ["jquery"],
};
