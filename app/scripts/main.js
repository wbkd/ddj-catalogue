require('es5-shim');
var React = require('react');
var router = require('./router');

var routerStore = require('./stores/routerStore');
/*var director = require('director')
var routerConfig = require('./router-config.js');

new director
  .Router(routerConfig.routes)
  .configure(routerConfig.config)
  .init('/');
*/

router.run(function (Handler, state) {
  routerStore.setRouterState(state);
  React.render(<Handler/>, document.body);
});