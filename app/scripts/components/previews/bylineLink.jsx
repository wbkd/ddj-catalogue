var React = require('react/addons');
var FilterActions = require('../../actions/filterActions.js');

var BylineLink = React.createClass({


  filterSelect: function() {
    var filter = {
      text: this.props.text,
      category: 'byline'
    }
    FilterActions.filterSelect(filter); 
  },

  render: function() {
    return <span><span className="byline-link" onClick={this.filterSelect}>{this.props.text}</span><span>{this.props.addComma ? ', ' : ' '}</span></span>
  }
});

module.exports = BylineLink;