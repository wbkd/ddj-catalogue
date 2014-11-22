var React = require('react');

var FavoritesActions = require('../actions/favoritesActions')

var Favorite = React.createClass({

  unstarPreview: function(){
    FavoritesActions.starPreview({_id : this.props.data.id});
  },

  render: function() {
    var favoriteData = this.props.data;
    var style = {backgroundImage : 'url(' + favoriteData.src + ')'};

    return (
      <li className="favorite-item">
        <a href={favoriteData.url} target="_blank" className="clearfix">
          <div className="favorite-item-img" style={style}></div>
          <div className="favorite-content">
            <div className="favorite-title">{favoriteData.title}</div>
            <div className="favorite-subtitle">{favoriteData.publisher}, {favoriteData.date}</div>
          </div>
          
        </a>

        <div className="btn-close" ref="unstar" data-id={favoriteData.id} onClick={this.unstarPreview}><i className="icon_close"></i> Aus der Liste entfernen</div>
      </li>
    );
  }

});

module.exports = Favorite;