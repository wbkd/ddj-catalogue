var React = require('react');
var InfoBox = require('./info.jsx');
var FilterablePreviewList = require('./filterablePreviewList.jsx');
var MenuStore = require('../stores/menuStore.js');


var Content = React.createClass({

  displayName: 'Content',

  getInitialState: function() {
  	return {
  		shiftPx: 0
  	}
  },

  componentDidMount: function() {
  	MenuStore.listen(this.shiftContent);
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
      this.setState({shiftPx: menuOffset});
    }
  },

  render: function() {

  	var divStyle = {
      transform: 'translateX(' + this.state.shiftPx + 'px)'
    }

    return (
      <div style={divStyle} className="content-wrapper">
			 <InfoBox />
			 <FilterablePreviewList />
		  </div>
    	);
  	}
});

module.exports = Content;

