var React = require('react/addons');
var FilterStore = require('../stores/filterStore');
var FilterActions = require('../actions/filterActions');
var Filters = require('./filters.jsx');
var PreviewList = require('./filterablePreviewList.jsx');
var cx = React.addons.classSet;

var FilterMenu = React.createClass({

	displayName: 'FilterMenu',

  getInitialState: function() {
    var isActive = window.innerWidth > 1280 + 500;
    return {
      isActive: isActive,
      isLargeScreen: isActive
    }
  },

  onStatusChange: function(state) {
      this.setState(state);
  },

  componentDidMount: function() {
      this.unsubscribe = FilterStore.listen(this.onStatusChange);
  },

  render: function() {

    var classes = cx({
      'filter-menu': true,
      'active': this.state.isActive
    });

    var closeMenu = function() {
      FilterActions.toggleMenu();
    }

    var closeBtn = this.state.isLargeScreen ? '' : <i onClick={closeMenu} className="icon_close"></i>;
    
    return (
    	<div className={classes}>
    		<div className="closeMenu">{closeBtn}</div>
        <Filters />
    	</div>
    );
  }
});

module.exports = FilterMenu;