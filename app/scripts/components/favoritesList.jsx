var React = require('react');
var Favorite = require('./favorite.jsx');
var MenuActions = require('../actions/menuActions');

var FavoritesList = React.createClass({

    propTypes : {
      favoritesListActive : React.PropTypes.bool,
      favorites : React.PropTypes.array,
      noFavoritesAddedMessage :  React.PropTypes.string
    },

    getDefaultProps: function(){
      return {
        favoritesListActive : false,
        favorites : [],
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
      });

      if(favorites.length === 0){
        favorites = this.props.noFavoritesAddedMessage;
      }

      return (
            <div className="info favorites-list">
                <ul className="centered">
                  <div className="btn-close"><i onClick={this.hideInfo} className="icon_close"></i></div>
                  {favorites}
                </ul>
            </div>
      );

    }
});

module.exports = FavoritesList;