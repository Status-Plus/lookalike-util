const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lookalike.js',
    library: {
        name: "lookalikeUtil",
        type: 'umd'
    }
  },
  resolve: {
    fallback: {
        "fs": false
    },
}
};