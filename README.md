## Radash for Nuxt

[Radash](https://radash-docs.vercel.app) auto-import module for [Nuxt](https://nuxtjs.org).

## 📦 Install

Install `radash-nuxt` as development dependency:

```bash
npm i radash-nuxt -D
```

Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ["radash-nuxt"],
});
```

## 🚀 Example

Use any [Radash](https://radash-docs.vercel.app/) methods in your Nuxt application, they will be auto-imported!

```html
<script setup>
  const fish = [
    {
      name: "Marlin",
      weight: 105,
      source: "ocean",
    },
    {
      name: "Bass",
      weight: 8,
      source: "lake",
    },
    {
      name: "Trout",
      weight: 1,
      source: "lake",
    },
  ];

  const ra = {
    Mode: "god",
    Power: "sun",
  };

  const min = useMin(fish, (f) => f.weight);
  const text = usePascal("It works!");
  const lowerize = useLowerize(ra);
  const snake = stringToSnake("green fish blue fish");
</script>

<template>
  <div>
    <div>{{ text }}</div>
    <pre>{{ min }}</pre>
    <pre>{{ lowerize }}</pre>
    <pre>{{ snake }}</pre>
  </div>
</template>
```

## 🔨 Config

| Name               | Default | Description                                                                           |
| ------------------ | ------- | ------------------------------------------------------------------------------------- |
| `prefix`           | `'use'` | String to prepend before each Radash function (false to disable)                      |
| `prefixSkip`       | `'is'`  | Functions that starts with this keywords will be skipped by prefix (false to disable) |
| `upperAfterPrefix` | `true`  | If true it will automatically uppercase first letter after prefix (false to disable)  |
| `alias`            | `[]`    | Array of array pairs to rename specific Radash functions (prefix is still added)      |

## 💻 Example - Config

```ts
export default defineNuxtConfig({
  modules: ["radash-nuxt"],
  imports: {
    autoImport: true,
  },
  radash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: true,
    alias: [
      ["snake", "stringToSnake"], // => stringToSnake
    ],
  },
});
```

## Acknowledgement

The development of radash-nuxt was made possible thanks to the inspiration and code base from [nuxt-lodash](https://github.com/cipami/nuxt-lodash).

## 📄 License

[MIT License](https://github.com/bbg/radash-nuxt/blob/master/LICENSE) © 2023 - [Batuhan Göksu](https://github.com/bbg)
