var React = require('react/addons');
var FilterActions = require('../actions/filterActions');
var Filters = require('./filters.jsx');
var cx = React.addons.classSet;

var FilterMenu = React.createClass({

  propTypes : {
    filterMenuActive : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      filterMenuActive : false
    };
  },

  closeMenu : function() {
      FilterActions.toggleFilterMenu();
  },

  render: function() {

    var classes = cx({
      'filter-menu': true,
      'active': this.props.filterMenuActive
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