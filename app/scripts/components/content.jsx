var React = require('react');
var InfoBox = require('./infobox.jsx');
var PreviewList = require('./previewList.jsx');
var MenuStore = require('../stores/menuStore.js');
var FilterStore = require('../stores/filterStore.js');
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');
var FilterMenu = require('./filterMenu.jsx');

var Content = React.createClass({

  getInitialState: function() {
  	return {
  		shiftPx: 0,
      filterMenuActive : false,
      infoActive: typeof Cookies.get('ddj-infobox') === 'undefined'
  	}
  },

  componentDidMount: function() {
  	MenuStore.listen(this.onStatusChange);
    FilterStore.listen(this.onStatusChange);
  },

  onStatusChange: function(state){
    this.setState(state);
    this.shiftContent();
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

  shiftContent: function() {

    var menuOpen = this.state.filterMenuActive;

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
      <div>
        <FilterMenu filterMenuActive={this.state.filterMenuActive}/>
        <div style={divStyle} className="content-wrapper">
  			   <InfoBox infoActive={this.state.infoActive} />
  			   <PreviewList />
  		  </div>
      </div>
    	);
  	}
});

module.exports = Content;

