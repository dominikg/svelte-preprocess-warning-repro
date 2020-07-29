const preprocess = require('svelte-preprocess');
module.exports = {
  preprocess: [
    preprocess({
      // disable all but typescript
      babel: false,
      scss: false,
      sass: false,
      less: false,
      stylus: false,
      postcss: false,
      coffeescript: false,
      pug: false,
      globalStyle: false,
      replace: false,
    }),
    preprocess({typescript:false})
  ],
};
// this one works without warnings
/*
module.exports = {
  preprocess: preprocess({
    typescript: false, // for typescript, use the typescript examples!
  }),
};
*/