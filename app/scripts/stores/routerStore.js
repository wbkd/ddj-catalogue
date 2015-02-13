/* 
  we need this store to use the Router mixins 
  https://github.com/rackt/react-router/issues/470
  
*/

var Reflux = require('reflux');
var routerActions = require('../actions/routerActions');

var merge = require('merge');
//var routerState = null;

var router = require('../router');

var RouterStore = Reflux.createStore({
  
  init() {
    this.query = {};
    this.routerState = {};
    this.listenTo(routerActions.updateQueryParam, this.updateQueryParam);
  },

  updateQueryParam(operation, params) {
    
    console.log(operation);
    console.log(this.routerState)
    
    if(typeof this.routerState === 'undefined'){
      return false;
    }
    
    if(operation === 'add'){
      this.addQueryparam(params);
    }else if(operation === 'remove'){
      this.removeQueryParam(params);
    }
    
  },
  
  addQueryparam(params) {
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
  console.log(routerState)
}

module.exports = RouterStore;