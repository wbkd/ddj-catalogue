var React = require('react');

var EmbedFooter = React.createClass({

  render() {
    return (
      <div className="embed-footer"><a target="_blank" href="http://katalog.datenjournalismus.net">Weitere Projekte finden sich im DDJ Katalog<img className="footer-logo" src="images/datenkatalog-logo.png"/></a></div>
    );
  }

});

module.exports = EmbedFooter;