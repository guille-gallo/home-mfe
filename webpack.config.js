const path = require('path');

module.exports = {
  entry: './src/guille-home-mfe.tsx', // Adjust to your entry file
  output: {
    filename: 'guille-home.js', // Adjust to your output file name
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // Optional: speeds up compilation, but disables type checking
          }
        },
      },
    ],
  },
  mode: 'production',
  externals: ['react', 'react-dom', 'single-spa', 'single-spa-react'],
};
