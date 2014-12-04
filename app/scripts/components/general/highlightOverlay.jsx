var React = require('react');
var cx = React.addons.classSet;

var PreviewActions = require('../../actions/previewActions');
var FilterActions = require('../../actions/filterActions');

var HighlightOverlay = React.createClass({
  
  handleClick: function(){
    PreviewActions.shrinkPreviews();
    FilterActions.hideFilterMenu();
  },

	render: function() {

		var classes = cx({
			'highlight-overlay': true,
			'active': this.props.isActive
		});

		return <div onClick={this.handleClick} className={classes}></div>
	}

});

module.exports = HighlightOverlay;