const path = require('path');

module.exports = {
  // mode: 'development',
  // mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'myBundle.js',
    path: path.resolve(__dirname, './')
  }
};