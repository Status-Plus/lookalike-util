const path = require('path');

const webConfig = {
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist/web'),
    filename: 'lookalike.js',
    library: {
      name: 'lookalikeUtil',
      type: 'umd',
    },
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
};

const cjsConfig = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/cjs'),
    filename: 'lookalike.js',
    library: {
      name: 'lookalikeUtil',
      type: 'umd',
    },
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
};

module.exports = [webConfig, cjsConfig];
