var reqwest = require('reqwest');
var config = require('../config');

var SubmitApi = {

  // type can be 'email' or project
  submit : function(type, data){

    return reqwest({ 
      url : config.submitUrl + '/' + type, 
      type : 'json', 
      method: 'post',
      data : data,
      crossOrigin: true
    });
  },
};

module.exports = SubmitApi;
