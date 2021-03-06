var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix
    .styles([
        'node_modules/admin-lte/bootstrap/css/bootstrap.css',
        'node_modules/font-awesome/css/font-awesome.css',
        'node_modules/ionicons/dist/css/ionicons.css',
        'node_modules/admin-lte/plugins/iCheck/square/blue.css',
        'node_modules/admin-lte/plugins/select2/select2.css',
        'node_modules/admin-lte/plugins/datatables/dataTables.bootstrap.css',
        'node_modules/admin-lte/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css',
        'node_modules/admin-lte/dist/css/AdminLTE.css',
        'node_modules/admin-lte/dist/css/skins/skin-blue.css',
        'resources/assets/css/app.css'
    ], 'public/css/all.css', './')
    .copy('node_modules/font-awesome/fonts', 'public/build/fonts')
    .copy('node_modules/ionicons/dist/fonts', 'public/build/fonts')
    .copy('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'public/build/fonts')
    .copy('node_modules/admin-lte/plugins/iCheck/square/blue.png', 'public/build/css/blue.png')
    .copy('node_modules/admin-lte/plugins/iCheck/square/blue@2x.png', 'public/build/css/blue@2x.png')

    .scripts([
        'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
        'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
        'node_modules/admin-lte/dist/js/app.min.js',
        'node_modules/admin-lte/plugins/iCheck/icheck.min.js',
        'node_modules/admin-lte/plugins/select2/select2.min.js',
        'node_modules/admin-lte/plugins/datatables/jquery.dataTables.min.js',
        'node_modules/admin-lte/plugins/datatables/dataTables.bootstrap.min.js',
        'node_modules/admin-lte/plugins/datatables/extensions/Responsive/js/dataTables.responsive.min.js',
        'node_modules/admin-lte/plugins/flot/jquery.flot.min.js',
        'node_modules/admin-lte/plugins/flot/jquery.flot.pie.min.js',
        'node_modules/moment/moment.js',
        'resources/assets/js/icheck.js',
        'resources/assets/js/sidebar.js',
        'resources/assets/js/select2.js',
        'resources/assets/js/date-uk.js'
    ], 'public/js/all.js', './')

    .version(['public/css/all.css', 'public/js/all.js'])
    ;
});
