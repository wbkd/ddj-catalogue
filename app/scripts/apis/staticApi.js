var reqwest = require('reqwest');
var config = require('../config');

var StaticApi = {

  loadFilters: function(){
    return reqwest({ url: config.baseUrl('ui-data'), dataType: 'json', crossOrigin: true  });
  },

  loadFaqs : function(){
    return reqwest({ url: config.baseUrl('faq-data'), dataType: 'json', crossOrigin: true  });
  }

};

module.exports = StaticApi;