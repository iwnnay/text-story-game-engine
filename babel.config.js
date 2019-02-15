module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
  ],
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
    '@babel/preset-react',
  ],
  env: {
    test: {
      plugins: ['babel-plugin-dynamic-import-node'],
    },
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
  },
};
