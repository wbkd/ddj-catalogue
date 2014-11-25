var React = require('react/addons');
var cx = React.addons.classSet;
// components
var FilterGroup = require('./filterGroup.jsx');
// actions
var FilterActions = require('../../actions/filterActions');
// stores
var FilterStore = require('../../stores/filterStore.js');

var FilterMenu = React.createClass({

  propTypes : {
    filterMenuActive : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      filterMenuActive : false
    };
  },

  getInitialState: function() {
    return {
      selectedFilters: {},
      uiData: []
    }
  },

  onStatusChange: function(state) {
    this.setState(state);
  },

  componentDidMount: function() {
    this.unsubscribe = FilterStore.listen(this.onStatusChange);
    FilterActions.loadFilters();
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  closeMenu : function() {
      FilterActions.toggleFilterMenu();
  },

  render: function() {

    var filters = this.state.uiData.map(function(d,i) {
      var selected = this.state.selectedFilters[d.dbId];
      return <FilterGroup key={'fg_' + i} data={d} selected={selected} />
    }.bind(this));

    var classes = cx({
      'filter-menu': true,
      'active': this.props.filterMenuActive
    });
    
    return (
    	<div className={classes}>
        <div className="force-scrollbar">
      		<div className="btn-close"><i onClick={this.closeMenu} className="icon_close"></i></div>
          <div className="filter-list">
            {filters}
          </div>
        </div>
    	</div>
    );
  }
});

module.exports = FilterMenu;