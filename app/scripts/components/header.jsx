var React = require('react');

var Header = React.createClass({

	displayName: 'Header',

  render: function() {
    return (
    	<header>
            <div className="clearfix header-content centered">
        		<div className="header-title">
        			DDJ-Katalog
        		</div>
        		<nav className="clearfix">
        			<a className="btn" href="#/projekte">Projekte</a>
    	      		<a className="btn" href="#/informationen">Info</a>
        		</nav>
            </div>
    	</header>
    );
  }
});


module.exports = Header;