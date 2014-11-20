var React = require('react/addons');

var Filter = React.createClass({

	displayName: 'Filter',

  getInitialState: function() {
    return {
      checked: false
    }
  },

  filterSelect: function() {
    console.log('filter selected: ', this);
    this.setState({checked: !this.state.checked});
  },

  render: function() {
    var props = this.props;
    var checkMark = this.state.checked ? <i className="icon_check"></i> : '';
    return (
    	<li className="filter" onClick={this.filterSelect}>{props.text} {checkMark}</li>
    );
  }
});

module.exports = Filter;