let mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .webpackConfig(webpackConfig)
  .react('resources/assets/app/app.js', 'public/js')
  .styles([
    'public/css/core/bootstrap.min.css',
    'public/css/core/now-ui-kit.css',
    'resources/assets/app/styles/style.css',
  ], 'public/css/app.css')
  .scripts([
    'public/js/core/jquery.min.js',
    'public/js/core/bootstrap.min.js',
    'public/js/core/popper.min.js',
    'public/js/core/now-ui-kit.js',
  ], 'public/js/vendor.js')
  .browserSync({
    proxy: 'localhost',
    host: 'localhost',
    port: 80,
    open: false,
    files: [
      'resources/assets/app/**/*',
    ],
  });
