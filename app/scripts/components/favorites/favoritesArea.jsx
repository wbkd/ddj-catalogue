var React = require('react/addons');
var cx = React.addons.classSet;

var Favorite = require('./favorite.jsx');

var FavoritesActions = require('../../actions/favoritesActions');
var MenuActions = require('../../actions/menuActions');

var FavoritesArea = React.createClass({

    propTypes : {
      isActive : React.PropTypes.bool,
      favorites : React.PropTypes.array,
      favoritesUrl : React.PropTypes.string,
      isSharedFavoriteList : React.PropTypes.bool,
      noFavoritesAddedMessage :  React.PropTypes.string,
    },

    getDefaultProps: function(){
      return {
        isActive : false,
        favorites : [],
        favoritesUrl : '',
        isSharedFavoriteList : false,
        noFavoritesAddedMessage : 'Es wurden bisher keine Favoriten hinzugefügt. Klicken Sie auf einen Stern bei einem Projekt, um dieses bei der Favoritenliste hinzuzufügen.'
      };
    },

    hideList: function() {
      MenuActions.hideAllAreas();
    },

    hideSharedList: function(){
      MenuActions.hideSharedList();
    },

    resetList: function(){
      FavoritesActions.resetFavorites();
    },

    render: function() {

      if(!this.props.isActive){
        return false;
      }

      var favorites = this.props.favorites.map(function(favorite){
        return (<Favorite data={favorite} key={this.props.isShared + favorite.id} />);
      }.bind(this)),
        hasFavorites = favorites.length !== 0;

      var styles = cx({
        'favorites-list' : true,
        'area' : true,
        'is-shared-list' : this.props.isShared
      });

      return (
            <div className={styles}>
                <div className="centered">
                  
                  <div className="clearfix">
                    <div className="btn btn-close" onClick={this.props.isShared ? this.hideSharedList : this.hideList}>
                      <i className="icon_close"></i>
                      schließen
                    </div>
                    {hasFavorites ? <div className="btn btn-clear" onClick={this.resetList}><i className="icon_trash_alt"></i> Liste leeren</div> : ''}
  
                  </div>

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

module.exports = FavoritesArea;