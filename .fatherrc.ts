export default {
  target: 'browser',
  disableTypeCheck: true,
  // cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  extractCSS: true,
  lessInBabelMode: {},
  // runtimeHelpers: true,
  extraBabelPlugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
};
