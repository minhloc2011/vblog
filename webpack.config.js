var path = require('path');

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'App': path.join(__dirname, 'resources/assets/app'),
      'Components': path.join(__dirname, 'resources/assets/app/components'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  }
};
