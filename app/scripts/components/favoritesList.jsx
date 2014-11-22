var React = require('react/addons');
var cx = React.addons.classSet;
var Favorite = require('./favorite.jsx');
var MenuActions = require('../actions/menuActions');

var FavoritesList = React.createClass({

    propTypes : {
      favoritesListActive : React.PropTypes.bool,
      favorites : React.PropTypes.array,
      favoritesUrl : React.PropTypes.string,
      isSharedFavoriteList : React.PropTypes.bool,
      noFavoritesAddedMessage :  React.PropTypes.string,
    },

    getDefaultProps: function(){
      return {
        favoritesListActive : false,
        favorites : [],
        favoritesUrl : '',
        isSharedFavoriteList : false,
        noFavoritesAddedMessage : 'Es Wurden bisher keine Favoriten hinzugefügt.'
      };
    },

    hideList: function() {
      MenuActions.hideFavoritesList();
    },

    hideSharedList: function(){
      MenuActions.hideSharedList();
    },

    render: function() {

      if(!this.props.favoritesListActive){
        return false;
      }

      var favorites = this.props.favorites.map(function(favorite){
        return (<Favorite data={favorite} key={this.props.isShared + favorite.id} />);
      }.bind(this)),
        hasFavorites = favorites.length !== 0;

      var styles = cx({
        'favorites-list' : true,
        'info' : true,
        'is-shared-list' : this.props.isShared
      });

      return (
            <div className={styles}>
                <div className="centered">
                  <div className="btn-close"><i onClick={this.props.isShared ? this.hideSharedList : this.hideList} className="icon_close"></i></div>
                  <h1>{this.props.isShared ? 'Geteilte Favoriten ' : 'Meine Favoriten'}</h1>
                  <ul>
                    {hasFavorites ? favorites : this.props.noFavoritesAddedMessage }
                  </ul>
                  <div className="favorites-url" hidden={!hasFavorites || this.props.isShared}>
                    <label>Favoritenliste teilen</label>
                    <input value={this.props.favoritesUrl} readOnly/>
                  </div>
                </div>
            </div>
      );

    }
});

module.exports = FavoritesList;