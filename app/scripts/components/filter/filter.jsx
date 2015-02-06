var React = require('react/addons');
var cx = React.addons.classSet;

var FilterActions = require('../../actions/filterActions.js');

var Filter = React.createClass({

  filterSelect() {
    if(this.props.checked) {
      return FilterActions.filterUnselect(this.props);
    }
    FilterActions.filterSelect(this.props); 
  },

  render() {

    var classes = cx({
      'filter': true,
      'active': this.props.checked
    });
    
    return (
    	<li className={ classes } onClick={ this.filterSelect }>{ this.props.text } <i className="icon_close"></i></li>
    );
  }
});

module.exports = Filter;