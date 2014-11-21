var React = require('react/addons');
var MenuStore = require('../stores/menuStore');
var MenuActions = require('../actions/menuActions');
var Filters = require('./filters.jsx');
var PreviewList = require('./filterablePreviewList.jsx');
var cx = React.addons.classSet;

var FilterMenu = React.createClass({

	displayName: 'FilterMenu',

  getInitialState: function() {
    return {
      isActive: false
    }
  },

  onStatusChange: function(state) {
      this.setState(state);
  },

  componentDidMount: function() {
      this.unsubscribe = MenuStore.listen(this.onStatusChange);
  },

  render: function() {

    var classes = cx({
      'filter-menu': true,
      'active': this.state.isActive
    });

    var closeMenu = function() {
      MenuActions.toggleMenu();
    }
    
    return (
    	<div className={classes}>
    		<div className="btn-close"><i onClick={closeMenu} className="icon_close"></i></div>
        <Filters />
    	</div>
    );
  }
});

module.exports = FilterMenu;