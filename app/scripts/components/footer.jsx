var React = require('react');

var Footer = React.createClass({

displayName: 'Footer',

  render: function() {
    return (
    	<div>
    		footer info
    	</div>
    );
  }
});

React.render(<Footer />, document.getElementById('footer'));