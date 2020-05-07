// wrong
// require.config({
//   baseUrl: 'public/static/js/'
// });

// correct -> static files url is already set by express middleware to public/static/
require.config({
  baseUrl: 'js/',
  paths: {
    jquery: 'vendor/jquery-3.5.1.min'
  }
});

require(['jquery', 'myScript', 'vendor/vendorScript1'], function() {
  $('#main-header').css("color", "#f00");
});