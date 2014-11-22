var React = require('react');

var FavoritesActions = require('../actions/favoritesActions')

var Favorite = React.createClass({

  unstarPreview: function(){
    FavoritesActions.starPreview({_id : this.props.data.id});
  },

  render: function() {
    var favoriteData = this.props.data;
    var style = {background : 'url(' + favoriteData.src + ')'};

    return (
      <li className="favorite-item">
        <a href={favoriteData.url} target="_blank">
          <div className="favorite-item-img" style={style} ></div> {favoriteData.title}
        </a>

        <div className="btn-close" ref="unstar" data-id={favoriteData.id} onClick={this.unstarPreview}><i className="icon_close"></i> Aus der Liste entfernen</div>
      </li>
    );
  }

});

module.exports = Favorite;