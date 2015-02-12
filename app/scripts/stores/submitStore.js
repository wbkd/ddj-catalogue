var Reflux = require('reflux');
var utils = require('../utils');
var submitActions = require('../actions/submitActions');

var SubmitStore = Reflux.createStore({

  init() {
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

  submitProjectSuccess(data) {

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
  submitProjectError(errorMessage) {
    this.submitError = errorMessage;
    this.submitSuccess = false;

    this.trigger({
      submitAreaError : this.submitError,
      submitAreaSuccess : this.submitSuccess
    });
  },

  resetSubmitArea() {
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

  submitEmailSuccess(data) {

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

  submitEmailError(errorMessage) {
    this.newsletterError = errorMessage;
    this.newsletterSuccess = false;

    this.trigger({
      newsletterError : this.newsletterError,
      newsletterSuccess : this.newsletterSuccess
    });
  },

  resetNewsletterArea() {
    this.newsletterError = '';
    this.newsletterSuccess = false;

    this.trigger({
      newsletterError : this.newsletterError,
      newsletterSuccess : this.newsletterSuccess
    });
  }

});

module.exports = SubmitStore;