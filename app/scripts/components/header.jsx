var React = require('react');
var config = require('../config')

var FilterActions = require('../actions/filterActions');
var MenuActions = require('../actions/menuActions');

var Header = React.createClass({

  render: function() {
    return (
    	<header>
        <div className="clearfix header-content centered">
          <div className="header-title">
        	  <a href="/">{config.appName}</a>
          </div>
          <nav className="clearfix">
            <span className="nav-item" onClick={MenuActions.toggleFavoritesList}><i className="icon_star"></i>Favoriten</span>
            <span className="nav-item" onClick={MenuActions.toggleSubmitArea}><i className="icon_upload"></i>Einreichen</span>
            <span className="nav-item" onClick={MenuActions.toggleNewsletterArea}><i className="icon_mail"></i>Newsletter</span>
            <span className="nav-item" onClick={MenuActions.toggleInfo}><i className="icon_info_alt"></i></span>
          </nav>
        </div>
    	</header>
    );
  }
});

module.exports = Header;

