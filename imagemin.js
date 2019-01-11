'use strict'

const imagemin = require('imagemin')

const mozjpeg = require('imagemin-mozjpeg')
const jpegtran = require('imagemin-jpegtran')
const optipng = require('imagemin-optipng')
const advpng = require('imagemin-advpng')
const pngquant = require('imagemin-pngquant')
const svgo = require('imagemin-svgo')
const webp = require('imagemin-webp')

// Same config as in ./webpack/image-webpack-loader.js
imagemin(
  ['./src/assets/*.{jpg,png,svg}'],
  'output/imagemin-image-webpack-loader-config',
  {
    plugins: [
      mozjpeg({
        progressive: true,
        quality: 65,
      }),
      pngquant({
        quality: [0.65, 0.9],
        speed: 4,
      }),
      svgo({
        removeViewBox: false,
      }),
    ],
  }
)

// https://github.com/tomchentw/imagemin-lint-staged/blob/master/lib/index.js
imagemin(
  ['./src/assets/*.{jpg,png,svg}'],
  'output/imagemin-lint-staged-config',
  {
    plugins: [
      jpegtran({
        progressive: true,
      }),
      optipng({
        optimizationLevel: 5,
      }),
      svgo({
        removeViewBox: false,
      }),
    ],
  }
)

/*
Some basic values from https://web.dev/ + advgpng from https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/#closing-recommendations
*/

imagemin(['./src/assets/*.{jpg,png,svg}'], 'output/imagemin-webdev', {
  plugins: [
    mozjpeg({
      quality: 50,
    }),
    pngquant({
      quality: [0.49, 0.5],
    }),
    advpng(),
    svgo({
      removeViewBox: false,
    }),
  ],
})

imagemin(['./src/assets/*.{jpg,png}'], 'output/imagemin-webp', {
  use: [webp({ quality: 50 })],
})
