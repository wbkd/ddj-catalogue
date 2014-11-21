var React = require('react');
var PreviewList = require('./previewList.jsx');
var PreviewStore = require('../stores/previewStore.js');
var previewActions = require('../actions/previewActions');

var FilterablePreviewList = React.createClass({

  getInitialState: function() {
    return {
      previews: []
    }
  },

  onStatusChange: function(state) {
    this.setState(state);
  },

  componentDidMount: function() {
    this.unsubscribe = PreviewStore.listen(this.onStatusChange);
    previewActions.load();
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  render: function() {

    return (
      <PreviewList previews={this.state.previews}/>
    );
  }

});

module.exports = FilterablePreviewList;