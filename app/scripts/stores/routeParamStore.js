var Reflux = require('reflux');
var URI = require('URIjs');

var utils = require('../utils');
var config = require('../config');

var FilterActions = require('../../actions/filterActions');

var RouteParamStore = Reflux.createStore({

  init() {
    this.filters = null;
    this.sortType = config.sortType;
    this.isSortOrderDesc = config.isSortOrderDesc;

    this.listenTo(filterActions.filterSelect, this.filterSelect);
    this.listenTo(filterActions.filterUnselect, this.filterUnselect);
  },

  getRouteParams() {
    return {
      filters: this.filters,
      sortType: this.sortType,
      isSortOrderDesc: this.isSortOrderDesc
    };
  },

  setRouteParams(paramString) {
    var parsedParams = URI.parseQuery(paramString);

    if (parsedParams.sort) {
      this.sortType = parsedParams.sort;
      delete parsedParams.sort;
    }
    if (parsedParams.order) {
      this.isSortOrderDesc = parsedParams.order === 'desc';
      delete parsedParams.order;
    }

    //set the parsedParams to use them in the views
    this.filters = parsedParams;
  },

  updateRoute() {
    window.location.hash = window.location.hash + utils.objToUrlParams(this.params);
    if (utils.isEmptyObject(data)) {
      window.location.hash = '/projekte';
    } else {
      urlParams = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
      }).join('&');
      window.location.hash = '/projekte/filter/' + urlParams;
    }
  }

});

module.exports = RouteParamStore;