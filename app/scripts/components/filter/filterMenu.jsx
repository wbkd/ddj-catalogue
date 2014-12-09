var React = require('react/addons');
var cx = React.addons.classSet;
// components
var FilterGroup = require('./filterGroup.jsx');
var FilterSelect = require('./filterSelect.jsx');

var FilterActions = require('../../actions/filterActions.js');

var FilterMenu = React.createClass({


  render: function() {
    var menuHeight = 1000;
    if(this.isMounted()) {
      menuHeight = this.getDOMNode().clientHeight;
    }

    var filters = this.props.uiData.map(function(d,i) {
      var selected = this.props.selectedFilters[d.dbId];
      var expanded = this.props.expandedGroups.indexOf(d.name) > -1;
      return d.isFilterable ? <FilterSelect isExpanded={expanded} key={'fg_' + i} category={d.dbId} data={d} selected={selected} placeholder={"Autor wählen..."}/> : <FilterGroup isExpanded={expanded} key={'fg_' + i} data={d} selected={selected} />;
    }.bind(this));

    var classes = cx({
      'filter-menu': true,
      'active': this.props.filterMenuActive,
      'scroll': menuHeight > window.innerHeight
    });

    var style = {
      top: this.props.filterMenuActive ? this.props.offsetTop : -menuHeight
    };

    return (
    	<div style={style} className={classes}>
        <div className="force-scrollbar">
          <div onClick={FilterActions.hideFilterMenu} className="close-menu-btn"><i className="arrow_carrot_up_alt"></i> Menü schließen</div>
          <div className="filter-list">
            {filters}
          </div>
        </div>
    	</div>
    );
  }
});

module.exports = FilterMenu;