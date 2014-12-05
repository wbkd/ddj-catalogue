var React = require('react');
var cx = React.addons.classSet;

var MenuActions = require('../../actions/menuActions');

var Navigation = React.createClass({
  render: function() {
    return (
    	<nav className="clearfix">
        <span className="nav-item" onClick={MenuActions.toggleSubmitArea}><i className="icon_upload"></i><span className="label">Einreichen</span></span>
        <span className="nav-item" onClick={MenuActions.toggleNewsletterArea}><i className="icon_mail_alt"></i><span className="label">Newsletter</span></span>
        <span className="nav-item" onClick={MenuActions.toggleFaqArea}><i className="icon_question"></i><span className="label">FAQ</span></span>
        <span className="nav-item" onClick={MenuActions.toggleInfo}><i className="icon_info_alt"></i><span className="label">Info</span></span>
      </nav>
    );
  }
});

module.exports = Navigation;