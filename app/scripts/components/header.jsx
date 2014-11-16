var React = require('react');

var Header = React.createClass({

	displayName: 'Header',

  render: function() {
    return (
    	<div className="clearfix header-content">
    		<div className="header-title">
    			DDJ-Katalog
    		</div>
    		<nav className="clearfix">
    			<a className="btn" href="#/projekte">Projekte</a>
	      		<a className="btn" href="#/informationen">Info</a>
    		</nav>
    	</div>
    );
  }
});

React.render(<Header />, document.getElementById('header'));