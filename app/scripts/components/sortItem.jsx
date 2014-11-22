var React = require('react');

var SortItem = React.createClass({

  render: function() {

    var sortArrowClass = this.props.isSortOrderDesc ? 'arrow_triangle-down' : 'arrow_triangle-up',
      arrowStyle = {display : 'inline-block'};

    if(this.props.type !== this.props.sortType){
      arrowStyle = { display: 'none' };
    }
    
    return (
      <li data-type= {this.props.type} className="sort-item" onClick={this.props.onClick}>
                {this.props.title} 
        <span className="sorter-arrows" style={arrowStyle}>
          <i className={sortArrowClass}></i>
        </span>
      </li>
    );
  }

});

module.exports = SortItem;