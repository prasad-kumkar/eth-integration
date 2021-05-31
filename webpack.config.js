const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'fund.js',
    library: 'fund',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: 'babel-loader',
    }],
  },
  resolveLoader: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
},
resolve: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
}
};