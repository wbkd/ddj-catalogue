var React = require('react');
var FilterActions = require('../../actions/filterActions.js');

var DetailFilter = React.createClass({

  filterSelect(evt) {
    var filter = {
      text: this.props.text,
      category: this.props.description
    }
    FilterActions.filterSelect(filter); 
  },

  render() {

    //TODO: cleanup
    var Filter = this.props.isActive ? 
        <span><span className="detail-filter" onClick={ this.filterSelect }>{ this.props.text }</span><span>{ this.props.addComma ? ', ' : ' '}</span></span> : 
        <span><span className="detail-filter">{ this.props.text }</span><span>{ this.props.addComma ? ', ' : ' ' }</span></span>

    return (
      Filter
    );
  }
});

module.exports = DetailFilter;