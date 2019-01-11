# Image Optimization

The purpose of this repository is to demontrate various techniques, how to optimize images for web.

More information could be found in [my presentation](https://docs.google.com/presentation/d/1ejuuSkiip82594a3tNl_wshZng6dCLxneFnFMhdS5iM/edit?usp=sharing)

## Compared image processors

> I used default settings, to demonstrate that actually developers shouldn't rely on them and setup them by their needs.

- [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
- [img-loader](https://github.com/vanwagonet/img-loader)
- [ImageOptim](https://imageoptim.com/)
- [Kraken.io](https://kraken.io/)
- [tinypng.com](https://tinypng.com/)
- [imagemin-lint-staged](https://github.com/tomchentw/imagemin-lint-staged/)
- [imagemin](https://github.com/imagemin/imagemin)
- [SVGOMG](https://jakearchibald.github.io/svgomg/)

## Tested files

You can find tested non-optimized files in `./src/assets/`

## Output folder

In `./output` folder you can find optimized images.

> Note that just imagemin and webpack output's are generated. Rest is done manually.

To compare the size you can run:

```bash
cd output
du -sh * | sort -h
```

But note, that there some folders don't have equal amount of files (kraken.io and tinypng.com have file size limits, svgomg is meant to be just for svgs).

Therefore I created a [Google Sheet table](https://docs.google.com/spreadsheets/d/13InH-YuQZAyXnslrfkmzNwiU8nwoj1XUmCKeqQ5TbWk/edit?usp=sharing), where you can compare the ouput much easier :)

## What I learned after comparsion

- Set of correct imagemin plugins is a key to the success
- webp is the best format
- for some reason `image-webpack-loader` has a better output, than `imagemin` with the same config. Even though image-webpack-loader is using imagemin under the hood.

## Recommended reading

- [https://images.guide/](https://images.guide/)
- [https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/)
