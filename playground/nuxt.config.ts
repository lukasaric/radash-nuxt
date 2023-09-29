export default defineNuxtConfig({
  modules: ["../src/module"],
  imports: {
    autoImport: true,
  },
  radash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: true,
    alias: [
      ["snake", "stringToSnake"], // => stringToCamelCase
    ],
  },
});
