var React = require('react/addons');
var cx = React.addons.classSet;

var SortItem = React.createClass({

  render: function() {

    var sortArrowClass = this.props.isSortOrderDesc ? 'arrow_triangle-down' : 'arrow_triangle-up',
      itemClasses = cx({
        'sort-item' : true,
        'active' : this.props.type === this.props.sortType
      });

    return (
      <li data-type= {this.props.type} className={itemClasses} onClick={this.props.onClick}>
        {this.props.title} 
        <span className="sorter-arrows">
          <i className={sortArrowClass}></i>
        </span>
      </li>
    );
  }

});

module.exports = SortItem;