require('es5-shim');
var React = require('react');
var router = require('./router');
var routerActions = require('./actions/routerActions');

router.run(function (Handler, state) {
  routerActions.changeRoute(state);  
  React.render(<Handler />, document.body);
});