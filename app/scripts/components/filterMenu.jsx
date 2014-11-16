var React = require('react/addons');
var cx = React.addons.classSet;

var filterActions = require('../actions/filterActions');
var FilterStore = require('../stores/filterStore');


var FilterMenu = React.createClass({

	displayName: 'FilterMenu',

  getInitialState: function() {
    return {
      isActive: false
    }
  },

  componentDidMount: function() {
    this.unsubscribe = FilterStore.listen(this.onStatusChange);
  },

  componentWillUnmount: function() {
     this.unsubscribe();
  },

  onStatusChange: function(state) {
      this.setState(state);
  },

  render: function() {

     var classes = cx({
        'filter-menu': true,
        'filter-menu-active': this.state.isActive,
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

React.render(<FilterMenu />, document.getElementById('filter-menu'));