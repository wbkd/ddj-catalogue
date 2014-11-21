var React = require('react/addons');
var PreviewActions = require('../actions/previewActions.js');
var FilterActions = require('../actions/filterActions.js');

var Filter = React.createClass({

	displayName: 'Filter',

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
    var checkMark = props.checked ? <i className="icon_check"></i> : '';
    return (
    	<li className="filter" onClick={this.filterSelect}>{props.text} {checkMark}</li>
    );
  }
});

module.exports = Filter;