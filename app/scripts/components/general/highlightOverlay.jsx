var React = require('react');
var cx = React.addons.classSet;

var PreviewActions = require('../../actions/previewActions');

var HighlightOverlay = React.createClass({
	
	
	render: function() {

		var classes = cx({
			'highlight-overlay': true,
			'active': this.props.isActive
		});

		return <div onClick={PreviewActions.shrinkPreviews} className={classes}></div>
	}

});

module.exports = HighlightOverlay;