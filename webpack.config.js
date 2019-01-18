const path = require('path');

module.exports = {
  mode: 'production',
  entry: './public.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',

        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
    ],
  },
};
