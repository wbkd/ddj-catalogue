var reqwest = require('reqwest');
var config = require('./config');

var SubmitApi = {

  //initial load
  submit : function(projectUrl){
    return reqwest({ 
      url : config.submitUrl, 
      type : 'json', 
      method: 'post',
      data : {
        url : projectUrl
      },
      crossOrigin: true
    });
  }
};

module.exports = SubmitApi;