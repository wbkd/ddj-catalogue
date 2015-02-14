require('es5-shim');
var React = require('react');
var router = require('./router');
var routerStore = require('./stores/routerStore');

router.run(function (Handler, state) {
  routerStore.setRouterState(state);
  React.render(<Handler />, document.body);
});