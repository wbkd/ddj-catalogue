var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
    	<footer className="centered">
    		Ein Projekt von <a href="http://dacosto.com">DACOSTO</a> und <a href="http://webkid.io">webkid</a>
    	</footer>
    );
  }
});

module.exports = Footer;