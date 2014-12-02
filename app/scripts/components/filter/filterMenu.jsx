var React = require('react/addons');
var cx = React.addons.classSet;
// components
var FilterGroup = require('./filterGroup.jsx');

var FilterMenu = React.createClass({

  render: function() {

    console.log(this.props);

    var filters = this.props.uiData.map(function(d,i) {
      var selected = this.props.selectedFilters[d.dbId];
      return <FilterGroup key={'fg_' + i} data={d} selected={selected} />
    }.bind(this));

    var classes = cx({
      'filter-menu': true,
      'active': this.props.filterMenuActive
    });

    var style = {
      paddingTop: this.props.offsetTop
    }

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