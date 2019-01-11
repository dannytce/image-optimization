const path = require('path')

module.exports = {
  entry: path.join(process.cwd(), 'src/index.js'),
  output: {
    path: path.join(process.cwd(), 'output/image-webpack-loader'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              // Example options from:
              // https://github.com/tcoopman/image-webpack-loader/#usage
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
}
