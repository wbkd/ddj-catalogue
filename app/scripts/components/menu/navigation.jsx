var React = require('react');

var MenuActions = require('../../actions/menuActions');

var Navigation = React.createClass({

  render: function() {
    var favoritesCounter = (this.props.favoritesCount > 0) ? <span className="favorites-count">{this.props.favoritesCount}</span> : '';


    return (
    	<nav className="clearfix">
            <span className="nav-item" onClick={MenuActions.toggleFavoritesList}><i className="icon_star"></i>Favoriten</span>
            {favoritesCounter}
            <span className="nav-item" onClick={MenuActions.toggleSubmitArea}><i className="icon_upload"></i>Einreichen</span>
            <span className="nav-item" onClick={MenuActions.toggleNewsletterArea}><i className="icon_mail"></i>Newsletter</span>
            <span className="nav-item" onClick={MenuActions.toggleInfo}><i className="icon_info_alt"></i></span>
      </nav>
    );
  }
});

module.exports = Navigation;