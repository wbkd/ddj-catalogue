var Reflux = require('reflux');
var faqActions = require('../actions/faqActions');

var FaqStore = Reflux.createStore({

  init() {
    this.faqData = [];
    this.listenTo(faqActions.loadFaqData,this.loadFaqData);
    this.listenTo(faqActions.loadFaqDataSuccess,this.loadFaqDataSuccess);
    this.listenTo(faqActions.loadFaqDataError,this.loadFaqDataError);
  },

  loadFaqData() {

  },

  loadFaqDataSuccess(faqData) {
    this.trigger({
      faqData : faqData
    });
  },

  loadFaqDataError() {

  }

});

module.exports = FaqStore;