var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: './src/index.ts',
    output: {
      filename: './bundle.js'
    },
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
      rules: [
        {test: /\.ts$/, use: ['ts-loader']}
      ]
    }
  }
];
