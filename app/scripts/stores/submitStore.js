var Reflux = require('reflux');
var utils = require('../utils');
var submitActions = require('../actions/submitActions');

var SubmitStore = Reflux.createStore({

  init : function(){
    this.submitSuccess = false;
    this.submitError = '';

    this.newsletterSuccess = false;
    this.newsletterError = '';

    // project submits
    this.listenTo(submitActions.submitProjectSuccess,this.submitProjectSuccess);
    this.listenTo(submitActions.submitProjectError,this.submitProjectError);
    this.listenTo(submitActions.resetSubmitArea,this.resetSubmitArea);
    
    // email submits
    this.listenTo(submitActions.submitEmailSuccess,this.submitEmailSuccess);
    this.listenTo(submitActions.submitEmailError,this.submitEmailError);
    this.listenTo(submitActions.resetNewsletterArea,this.resetNewsletterArea);
  },

  /**************
  
  submit project functions

  ***************/

  submitProjectSuccess : function(data){

    if(data.error){
      return this.submitProjectError(data.error);
    }

    this.submitError = '';
    this.submitSuccess = true;

    this.trigger({
      submitAreaError : this.submitError,
      submitAreaSuccess : this.submitSuccess
    });
  },

  // the passed error message is displayed in the submit area
  submitProjectError : function(errorMessage){
    this.submitError = errorMessage;
    this.submitSuccess = false;

    this.trigger({
      submitAreaError : this.submitError,
      submitAreaSuccess : this.submitSuccess
    });
  },

  resetSubmitArea: function(){
    this.submitError = '';
    this.submitSuccess = false;

    this.trigger({
      submitAreaError : this.submitError,
      submitAreaSuccess : this.submitSuccess
    });
  },


  /**************
  
  submit newsletter functions

  ***************/

  submitEmailSuccess : function(data){

    if(data.error){
      return this.submitEmailError(data.error);
    }

    this.newsletterError = '';
    this.newsletterSuccess = true;

    this.trigger({
      newsletterError : this.newsletterError,
      newsletterSuccess : this.newsletterSuccess
    });
  },

  submitEmailError : function(errorMessage){
    this.newsletterError = errorMessage;
    this.newsletterSuccess = false;

    this.trigger({
      newsletterError : this.newsletterError,
      newsletterSuccess : this.newsletterSuccess
    });
  },

  resetNewsletterArea: function(){
    this.newsletterError = '';
    this.newsletterSuccess = false;

    this.trigger({
      newsletterError : this.newsletterError,
      newsletterSuccess : this.newsletterSuccess
    });
  }

});

module.exports = SubmitStore;