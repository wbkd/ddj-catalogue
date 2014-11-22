var React = require('react');
var FilterActions = require('../actions/filterActions');
var config = require('../config')
var MenuActions = require('../actions/menuActions');
var FavoritesActions = require('../actions/favoritesActions');

var Header = React.createClass({

  toggleInfo: function() {
    MenuActions.toggleInfo();
  },

  toggleFavoriteList: function(){
    MenuActions.toggleFavoritesList();
  },

  render: function() {
    return (
    	<header>
        <div className="clearfix header-content centered">
          <div className="header-title">
        	  <a href="/">{config.appName}</a>
          </div>
          <nav className="clearfix">
            <i onClick={this.toggleInfo} className="icon_info_alt nav-item"></i>
            <i onClick={this.toggleFavoriteList} className="icon_star nav-item"></i>
            <a href="http://www.twitter.com/ddj-katalog" className="nav-item"><i className="social_twitter"></i></a>
            <a href="#/rss" className="nav-item"><i className="social_rss"></i></a>
          </nav>
        </div>
    	</header>
    );
  }
});

module.exports = Header;