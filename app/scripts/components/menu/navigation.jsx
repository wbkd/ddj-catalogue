var React = require('react');
var cx = React.addons.classSet;

var MenuActions = require('../../actions/menuActions');

var Navigation = React.createClass({
  render: function() {
    return (
    	<nav className="clearfix">

        <span className="nav-item" onClick={MenuActions.toggleSubmitArea}><i className="icon_upload"></i>Einreichen</span>
        <span className="nav-item" onClick={MenuActions.toggleNewsletterArea}><i className="icon_mail"></i>Newsletter</span>
        <a className="nav-item" href="#/faqs"><i className="icon_question"></i>FAQ</a>
        <span className="nav-item" onClick={MenuActions.toggleInfo}><i className="icon_info_alt"></i></span>
      </nav>
    );
  }
});

module.exports = Navigation;