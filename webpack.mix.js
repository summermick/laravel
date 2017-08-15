let mix = require('laravel-mix');

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


mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/inline.bundle.js', 'public/js').sourceMaps()
    .js('resources/assets/js/main.bundle.js', 'public/js').sourceMaps()
    .js('resources/assets/js/polyfills.bundle.js', 'public/js').sourceMaps()
    .js('resources/assets/js/styles.bundle.js', 'public/js').sourceMaps()
    .js('resources/assets/js/vendor.bundle.js', 'public/js').sourceMaps()
    .sass('resources/assets/sass/app.scss', 'public/css');
