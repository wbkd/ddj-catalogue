var React = require('react/addons');
var cx = React.addons.classSet;

var FilterMenu = React.createClass({

	displayName: 'FilterMenu',

  getInitialProperties: function() {
    return {
      isActive: false
    }
  },

  render: function() {

    /*if(!this.props.isActive){
      return false;
    }*/

    var classes = cx({
      'filter-menu': true,
      'filter-menu-active': this.props.isActive
    });

    return (
    	<div className={classes}>
    		<ul>
          <li>Filter Foo</li>
          <li>Filter Foo</li>
          <li>Filter Foo</li>
          <li>Filter Foo</li>
          <li>Filter Foo</li>
        </ul>

    	</div>
    );
  }
});

module.exports = FilterMenu;