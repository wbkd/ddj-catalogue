var React = require('react/addons');
var PreviewActions = require('../actions/previewActions.js');
var FilterActions = require('../actions/filterActions.js');
var cx = React.addons.classSet;

var Filter = React.createClass({

  filterSelect: function() {
    if(this.props.checked) {
      FilterActions.filterUnselect(this.props);
    }
    else {
      FilterActions.filterSelect(this.props);
    }
  },

  render: function() {
    var props = this.props;
    var classes = cx({
      'filter': true,
      'active': props.checked
    });
    return (
    	<li className={classes} onClick={this.filterSelect}>{props.text} <i className="icon_check"></i><i className="icon_close"></i></li>
    );
  }
});

module.exports = Filter;