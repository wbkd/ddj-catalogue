var React = require('react');
var cx = React.addons.classSet;

var config = require('../config');
var utils = require('../utils');
var PreviewActions = require('../actions/previewActions')
var FavoritesActions = require('../actions/favoritesActions')


var Preview = React.createClass({

  propTypes : {
    data : React.PropTypes.object,
    isExpanded : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      data : {},
      isExpanded : false
    };
  },

  togglePreview: function(){
    PreviewActions.toggleExpandedPreview(this.props.data._id);
  },

  starPreview: function(){
    FavoritesActions.starPreview(this.props.data);
  },

  render: function() {

    var preview = this.props.data, 
      detailLink = '#/projekt/' + preview._id,
      previewImage = preview.serverImageurl ? config.imageUrl + preview.serverImageurl : config.defaultImage,
      imageStyle = {  backgroundImage: 'url(' + previewImage +  ')' },
      date = utils.formatDate(preview.date);

    var classes = cx({
      'preview' : true,
      'clearfix' : true,
      'is-expanded': this.props.isExpanded,
      'is-stared':this.props.isStared
    });

    return (
      <div className="column">
        	<div className={classes}>
        		<a className='preview-image'style={imageStyle} href={preview.url} target="_blank"></a>
            
            <div className="btn-group">
              <div onClick={this.starPreview} className="btn btn-star"><i className="icon_star"></i></div>
              <div onClick={this.togglePreview} className="btn btn-toggle"><i className="icon_info_alt"></i></div>
            </div>

            <div className='preview-content'>
          		<div className='preview-title'>{ preview.title }</div>
          		<div className='preview-publisher'>{ preview.publisher }, {date}</div>
              <div className='preview-expanded'>
                <div className='preview-description'>{ preview.description }</div>
                <div className='preview-byline'>Von { preview.byline.toString() }</div>
              </div>
            </div>
        	</div>
      </div>
    );
  }
});

module.exports = Preview;