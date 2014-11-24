var reqwest = require('reqwest');
var config = require('./config');

var SubmitApi = {

  //initial load
  submit : function(data){
    return reqwest({ 
      url : config.submitUrl, 
      type : 'json', 
      method: 'post',
      data : data,
      crossOrigin: true
    });
  }
};

module.exports = SubmitApi;
