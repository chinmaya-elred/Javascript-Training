// webpack.config.js
const path = require('path');

module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: 'todo.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
