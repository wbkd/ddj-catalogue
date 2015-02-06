var React = require('react/addons');
var cx = React.addons.classSet;
// components
var FilterGroup = require('./filterGroup.jsx');
var FilterSelect = require('./filterSelect.jsx');

var FilterActions = require('../../actions/filterActions.js');

var FilterMenu = React.createClass({

  render() {
    var menuHeight = 1000;
    if(this.isMounted()) {
      menuHeight = this.getDOMNode().clientHeight;
    }

    var filters = this.props.uiData.map((d, i) => {
      var selected = this.props.selectedFilters[d.dbId],
        expanded = this.props.expandedGroupIds.indexOf(d.name) > -1,
        key = 'fg_' + i;
      
      return d.isFilterable ? 
        (<FilterSelect isExpanded={ expanded } key={ key } category={ d.dbId } data={ d } selected={ selected } placeholder={ 'Autor wählen...' }/>) : 
        (<FilterGroup isExpanded={ expanded } key={ key } data={ d } selected={ selected } />);
    }),
    classes = cx({
      'filter-menu': true,
      'active': this.props.filterMenuActive,
      'scroll': menuHeight > window.innerHeight
    }),
    style = {
      top: this.props.filterMenuActive ? this.props.contentOffsetTop : -menuHeight
    };

    return (
      <div style={ style } className={ classes }>
        <div className="force-scrollbar">
          <div onClick={ FilterActions.hideFilterMenu } className="close-menu-btn">
            <i className="arrow_carrot_up_alt"></i> Menü schließen
          </div>
          <div className="filter-list">
            { filters }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FilterMenu;