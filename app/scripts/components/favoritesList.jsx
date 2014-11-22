var React = require('react');
var Favorite = require('./favorite.jsx');
var MenuActions = require('../actions/menuActions');

var FavoritesList = React.createClass({

    propTypes : {
      favoritesListActive : React.PropTypes.bool,
      favorites : React.PropTypes.array,
      favoritesUrl : React.PropTypes.string,
      noFavoritesAddedMessage :  React.PropTypes.string
    },

    getDefaultProps: function(){
      return {
        favoritesListActive : false,
        favorites : [],
        favoritesUrl : '',
        noFavoritesAddedMessage : 'Es Wurden bisher keine Favoriten hinzugefügt.'
      };
    },

    hideInfo: function() {
      MenuActions.toggleFavoritesList();
    },

    render: function() {

      if(!this.props.favoritesListActive){
        return false;
      }

      var favorites = this.props.favorites.map(function(favorite){
        return (<Favorite data={favorite} key={'fav_' + favorite.id} />);
      }),
        hasFavorites = favorites.length !== 0;

      return (
            <div className="info favorites-list">
                <div className="centered">
                  <div className="btn-close"><i onClick={this.hideInfo} className="icon_close"></i></div>
                  <h1>Favoriten Liste</h1>
                  <ul>
                    {hasFavorites ? favorites : this.props.noFavoritesAddedMessage }
                  </ul>
                  <div className="favorites-url" hidden={!hasFavorites}>
                    <label>Favoritenliste teilen</label>
                    <input value={this.props.favoritesUrl}/>
                  </div>
                </div>
            </div>
      );

    }
});

module.exports = FavoritesList;