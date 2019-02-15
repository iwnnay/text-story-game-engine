module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '11.6.0',
        },
      },
    ],
    ['env', { modules: false }],
  ],
  env: {
    test: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
};
