const path = require('path');

module.exports = {
  mode: 'production',
  entry: './public.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
  },
};
