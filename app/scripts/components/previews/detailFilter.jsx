var React = require('react/addons');
var FilterActions = require('../../actions/filterActions.js');

var DetailFilter = React.createClass({


  filterSelect: function() {

    var filter = {
      text: this.props.text,
      category: this.props.description
    }
    FilterActions.filterSelect(filter); 
  },

  render: function() {
    return <span><span className="detail-filter" onClick={this.filterSelect}>{this.props.text}</span><span>{this.props.addComma ? ', ' : ' '}</span></span>
  }
});

module.exports = DetailFilter;