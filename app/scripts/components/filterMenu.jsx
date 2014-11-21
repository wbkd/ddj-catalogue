var React = require('react/addons');
var MenuStore = require('../stores/menuStore');
var MenuActions = require('../actions/menuActions');
var Filters = require('./filters.jsx');
var cx = React.addons.classSet;

var FilterMenu = React.createClass({

  getInitialState: function() {
    return {
      menuActive: false
    }
  },

  onStatusChange: function(state) {
      this.setState(state);
  },

  componentDidMount: function() {
      this.unsubscribe = MenuStore.listen(this.onStatusChange);
  },

  closeMenu : function() {
      MenuActions.toggleMenu();
  },

  render: function() {

    var classes = cx({
      'filter-menu': true,
      'active': this.state.menuActive
    });
    
    return (
    	<div className={classes}>
    		<div className="btn-close"><i onClick={this.closeMenu} className="icon_close"></i></div>
        <Filters />
    	</div>
    );
  }
});

module.exports = FilterMenu;