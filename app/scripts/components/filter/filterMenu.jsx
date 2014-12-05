var React = require('react/addons');
var cx = React.addons.classSet;
// components
var FilterGroup = require('./filterGroup.jsx');
var FilterSelect = require('./filterSelect.jsx');

var FilterMenu = React.createClass({

  render: function() {
    var filters = this.props.uiData.map(function(d,i) {
      var selected = this.props.selectedFilters[d.dbId];
      return d.isFilterable ? <FilterSelect key={'fg_' + i} category={d.dbId} data={d} selected={selected} placeholder={"Autor wählen..."}/> : <FilterGroup key={'fg_' + i} data={d} selected={selected} />;
    }.bind(this));

    var classes = cx({
      'filter-menu': true,
      'active': this.props.filterMenuActive
    });

    var style = {
      paddingTop: this.props.offsetTop
    };

    return (
    	<div style={style} className={classes}>
        <div className="force-scrollbar">
          <div className="filter-list">
            {filters}
          </div>
        </div>
    	</div>
    );
  }
});

module.exports = FilterMenu;