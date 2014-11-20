var React = require('react/addons');
var FilterStore = require('../stores/filterStore');
var FilterActions = require('../actions/filterActions');
var Filters = require('./filters.jsx');
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
      this.unsubscribe = FilterStore.listen(this.onStatusChange);
  },

  render: function() {

    var self = this;

    var classes = cx({
      'filter-menu': true,
      'active': this.state.isActive
    });

    var closeMenu = function() {
      FilterActions.toggleMenu();
    }

    return (
    	<div className={classes}>
    		<div className="closeMenu"><i onClick={closeMenu} className="icon_close"></i></div>
        <Filters />
    	</div>
    );
  }
});

module.exports = FilterMenu;