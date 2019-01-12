'use strict'
const fs = require('fs')
const promisify = require('util.promisify')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const plugins = [
  [
    'imagemin-mozjpeg',
    {
      quality: 65,
      progressive: true,
    },
  ],
  [
    'imagemin-pngquant',
    {
      quality: [0.65, 0.9],
      speed: 4,
    },
  ],
  [
    'imagemin-svgo',
    {
      plugins: [{ removeViewBox: false }],
    },
  ],
].map(([name, opts]) => require(name)(opts))

const minifyFile = filename =>
  [...plugins, it => writeFile(filename, it)].reduce(
    (acc, it) => acc.then(it),
    readFile(filename)
  )

Promise.all(process.argv.slice(2).map(minifyFile)).catch(function(e) {
  console.error(e)
  process.exit(1)
})
