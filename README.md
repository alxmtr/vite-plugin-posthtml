# vite-plugin-posthtml
A [PostHTML](https://github.com/posthtml/posthtml) plugin for [Vite](https://vitejs.dev)

## Install
```bash
npm i @alxmtr/vite-plugin-posthtml
```

## Usage
Edit your `vite.config.js` file:
```js
import posthtmlPlugin from '@alxmtr/vite-plugin-posthtml'

export default {
  plugins: [
    posthtmlPlugin({
      options: {
        // ...
      },
      plugins: [
        // ...
      ],
    }),
  ],
}
```

## Options

### `options`
[PostHTML parser options](https://posthtml.org/#/core?id=posthtml-options)

### `plugins`
[PostHTML plugins](https://github.com/posthtml/posthtml#plugins)
