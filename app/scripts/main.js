require('es5-shim');
var director = require('director')
var routerConfig = require('./router-config.js');

new director
  .Router(routerConfig.routes)
  .configure(routerConfig.config)
  .init('/');

