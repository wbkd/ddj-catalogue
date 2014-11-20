var React = require('react');
var FilterStore = require('../stores/filterStore');
var PreviewList = require('./previewList.jsx');
var PreviewStore = require('../stores/previewStore.js');
var previewActions = require('../actions/previewActions');

var FilterablePreviewList = React.createClass({

  getInitialState: function() {
    return {
      previews: [],
      shiftPx: 0
    }
  },

  onStatusChange: function(state) {
    this.setState(state);
  },

  componentDidMount: function() {
    this.unsubscribe = PreviewStore.listen(this.onStatusChange);
    FilterStore.listen(this.shiftContent);
    previewActions.load();
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  getMenuOffset: function() {
    var menu = 250,
        container = 1280,
        win = window.innerWidth,
        result = 0;

    if(win <= container) {
      result = menu;
    }
    else {
      var offset = (win - container) / 2;
      result = offset > menu ? 0 : menu - offset;
    }
    return result;
  },

  shiftContent: function(params) {
    var menuOpen = params.isActive;
    if(!menuOpen) {
      this.setState({shiftPx: 0});
    }
    else {
      var menuOffset = this.getMenuOffset();
      console.log(menuOffset);
      this.setState({shiftPx: menuOffset});
    }
  },

  render: function() {
    
    var divStyle = {
      transform: 'translateX(' + this.state.shiftPx + 'px)'
    }

    return (
      <div className="preview-wrapper" style={divStyle}> 
        <PreviewList previews={this.state.previews}/>
      </div>
    );
  }

});

module.exports = FilterablePreviewList;