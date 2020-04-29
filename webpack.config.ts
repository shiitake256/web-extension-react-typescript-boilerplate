import * as path from 'path';
import * as webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'production',
  entry: {
    content_script: './src/content_script/index.tsx',
    popup: './src/popup/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/bundle.js'
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'src/**',
        to: '.',
        transformPath(targetPath, absolutePath) {
          return path.relative('src', targetPath);
        },
        // flatten: true,
        test: /^.*\.json$/,
        ignore: ['*.js', '*.ts', '*.tsx',],
      },
    ]),
  ],
  devtool: 'source-map',
};

export default config;
