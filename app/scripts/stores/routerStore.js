/* 

https://github.com/rackt/react-router/blob/master/docs/guides/flux.md#accessing-route-and-params-from-action-creators

*/

var Reflux = require('reflux');
var routerActions = require('../actions/routerActions');
var router = require('../router');
var utils = require('../utils');

var merge = require('merge');
var isInit = true;

var RouterStore = Reflux.createStore({
  
  init() {
    this.routerState = {};
    this.listenTo(routerActions.addQueryParam, this.addQueryParam);
    this.listenTo(routerActions.removeQueryParam, this.removeQueryParam);
    this.listenTo(routerActions.changeRoute, this.changeRoute);
  },

  changeRoute(params) {
    this.routerState = params;

    this.trigger({
      query : this.routerState.query
    });
  },
  
  addQueryParam(params) {
    var newQuery = {};
    newQuery[params.category] = params.text; 
    
    var query = merge(this.routerState.query, newQuery);
    
    router.transitionTo('/', null, query);
    
    this.routerState.query = query;
    
    /*this.trigger({
      query : this.routerState.query
    });*/
  },
  
  removeQueryParam(params) {
    var query = this.routerState.query;
    delete query[params.category];

    router.transitionTo('/', null, query);
    
    this.routerState.query = query;
    
    /*this.trigger({
      query : this.routerState.query
    });*/
  }
});

RouterStore.setRouterState = function(routerState){
  RouterStore.routerState = routerState;
  if(isInit && !utils.isEmptyObject(routerState.query)){
    routerActions.setInitialQuery(routerState.query);
    isInit = false;
  }
}

module.exports = RouterStore;