import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// const packageJson = require("./package.json");

// const packageJson = require("./package.json");
import packageJson from "./package.json" assert { type: "json" };
import sourcemaps from "rollup-plugin-sourcemaps";

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       // {
//       //   file: packageJson.main,
//       //   format: "cjs",
//       //   sourcemap: true,
//       // },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//     ],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [
//       {
//         file: "dist/index.d.ts",
//         format: "esm",
//       },
//     ],
//     plugins: [dts()],
//   },
// ];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", sourceMap: false }),
      sourcemaps(),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/types.d.ts", format: "esm" }],
    plugins: [dts.default()],
  },
];
