/* 

https://github.com/rackt/react-router/blob/master/docs/guides/flux.md#accessing-route-and-params-from-action-creators

*/

var Reflux = require('reflux');
var routerActions = require('../actions/routerActions');
var router = require('../router');

var merge = require('merge');

var RouterStore = Reflux.createStore({
  
  init() {
    this.routerState = {};
    this.listenTo(routerActions.addQueryParam, this.addQueryParam);
    this.listenTo(routerActions.removeQueryParam, this.removeQueryParam);
  },
  
  addQueryParam(params) {
    var newQuery = {};
    newQuery[params.category] = params.text; 
    
    var query = merge(this.routerState.query, newQuery);
    
    router.transitionTo('/', null, query);
  },
  
  removeQueryParam(params) {
    var currentQuery = this.routerState.query;
    delete currentQuery[params.category];

    router.transitionTo('/', null, currentQuery);
  }
});

RouterStore.setRouterState = function(routerState){
  RouterStore.routerState = routerState;
}

module.exports = RouterStore;