import { Options } from "tsup";

export default {
  bundle: true,
  dts: true,
  minify: true,
  format: "esm",
  clean: true,
  entry: ["index.ts"]
} as Options;
