var React = require('react');
var cx = React.addons.classSet;

var MenuActions = require('../../actions/menuActions');

var Navigation = React.createClass({
  render: function() {
    return (
    	<nav className="clearfix">
        <span className="nav-item" onClick={MenuActions.toggleSubmitArea}><i className="icon_upload"></i>Einreichen</span>
        <span className="nav-item" onClick={MenuActions.toggleNewsletterArea}><i className="icon_mail_alt"></i>Newsletter</span>
        <span className="nav-item" onClick={MenuActions.toggleFaqArea}><i className="icon_question"></i>FAQ</span>
        <span className="nav-item" onClick={MenuActions.toggleInfo}><i className="icon_info_alt"></i>Info</span>
      </nav>
    );
  }
});

module.exports = Navigation;