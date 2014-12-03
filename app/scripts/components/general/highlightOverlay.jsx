var React = require('react');
var cx = React.addons.classSet;

var HighlightOverlay = React.createClass({
	
	
	render: function() {

		var classes = cx({
			'highlight-overlay': true,
			'active': this.props.isActive
		});

		return <div className={classes}></div>
	}

});

module.exports = HighlightOverlay;