var React = require('react');
var InfoBox = require('./infobox.jsx');
var PreviewList = require('./previewList.jsx');
var MenuStore = require('../stores/menuStore.js');

var Content = React.createClass({

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

    var menuOpen = params.menuActive;

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
			 <PreviewList />
		  </div>
    	);
  	}
});

module.exports = Content;

