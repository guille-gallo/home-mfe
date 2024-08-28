const path = require('path');

module.exports = {
  entry: './src/guille-home-mfe.tsx',
  output: {
    filename: 'guille-home.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Matches both .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // Optional: speeds up compilation, but disables type checking
          }
        },
      },
      {
        test: /\.(scss|sass)$/, // Matches .scss files
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader',    // Turns CSS into CommonJS modules
          'sass-loader'    // Compiles Sass to CSS
        ],
      },
    ],
  },
  mode: 'production',
  externals: ['react', 'react-dom', 'single-spa', 'single-spa-react'],
};
