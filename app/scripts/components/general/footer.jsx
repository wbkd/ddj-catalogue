var React = require('react');
var i18n = require('../../i18n/de').footer;

var Footer = React.createClass({

  render() {
    return (
    	<footer className="centered" dangerouslySetInnerHTML={{ __html : i18n.text }}></footer>
    );
  }
});

module.exports = Footer;