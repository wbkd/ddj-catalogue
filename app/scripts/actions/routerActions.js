var Reflux = require('reflux');
var routerState = null;

var routerActions = Reflux.createActions([
  'updateQueryParam'
]);

/*routerActions.setRouterState = function(routerState){
  routerState = routerState;
}*/

/*routerActions.updateQueryParam.preEmit = function(data){
  console.log(data);
};*/

module.exports = routerActions;