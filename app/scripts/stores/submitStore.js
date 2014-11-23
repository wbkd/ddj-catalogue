var Reflux = require('reflux');
var utils = require('../utils');
var submitActions = require('../actions/submitActions');

var SubmitStore = Reflux.createStore({

  init : function(){
    this.isError = '';
    this.isSuccess = false;

    this.listenTo(submitActions.submitProjectSuccess,this.submitProjectSuccess);
    this.listenTo(submitActions.submitProjectError,this.submitProjectError);

    this.listenTo(submitActions.resetSubmitArea,this.resetSubmitArea);
    
  },

  submitProjectSuccess : function(data){

    if(data.error){
      return this.submitProjectError(data.error);
    }

    this.isError = '';
    this.isSuccess = true;

    this.trigger({
      submitAreaError : this.isError,
      submitAreaSuccess : this.isSuccess
    });
  },

  // the passed error message is displayed in the submit area
  submitProjectError : function(errorMessage){
    this.isError = errorMessage;
    this.isSuccess = false;

    this.trigger({
      submitAreaError : this.isError,
      submitAreaSuccess : this.isSuccess
    });
  },

  resetSubmitArea: function(){
    this.isError = '';
    this.isSuccess = false;

    this.trigger({
      submitAreaError : this.isError,
      submitAreaSuccess : this.isSuccess
    });
  }

});

module.exports = SubmitStore;