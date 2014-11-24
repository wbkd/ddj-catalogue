var React = require('react');
var FilterActions = require('../actions/filterActions');
var config = require('../config')
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
            <span className="nav-item" onClick={MenuActions.toggleSubmitArea}><i className="icon_mail"></i>Einreichen</span>
            <span className="nav-item" onClick={MenuActions.toggleInfo}><i className="icon_info_alt"></i></span>
             
          </nav>
        </div>
    	</header>
    );
  }
});

module.exports = Header;