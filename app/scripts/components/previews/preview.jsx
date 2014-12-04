var React = require('react/addons');
var cx = React.addons.classSet;

var config = require('../../config');
var utils = require('../../utils');

var SocialItems = require('./socialItems.jsx');
var BylineLink = require('./bylineLink.jsx');

var PreviewActions = require('../../actions/previewActions')
var FavoritesActions = require('../../actions/favoritesActions')

var Velocity = require('velocity-animate')

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
    
    if(!this.props.isExpanded) {
      Velocity(this.getDOMNode(), 'scroll', { duration: 500, offset: -100 });
    }
  },

  starPreview: function(){
    FavoritesActions.starPreview(this.props.data);
  },

  getBylineLinks: function(byline) {
    var links = [];
    byline.forEach(function(name, i) {
      links.push(<BylineLink key={"bl_" + i} text={name} addComma={i < byline.length - 1}/>);
    });
    return links;
  },

  render: function() {

    var preview = this.props.data, 
      detailLink = '#/projekt/' + preview._id,
      previewImage = preview.serverImageurl ? config.imageUrl + preview.serverImageurl : config.defaultImage,
      imageStyle = {  backgroundImage: 'url(' + previewImage +  ')' },
      date = utils.formatDate(preview.date);

    var classes = cx({
      preview : true,
      clearfix : true,
      'is-expanded': this.props.isExpanded,
      'is-stared':this.props.isStared
    });

    return (
      <div className="column">
        	<div className={classes}>
            <div onClick={this.togglePreview} className="close-btn"><i className="icon_close"></i></div>
        		<span onClick={this.togglePreview} className='preview-image'style={imageStyle} href={preview.url} target="_blank"></span>
            
            <div className="btn-group">
              <div onClick={this.starPreview} className="btn btn-star"><i className="icon_star"></i></div>
              <a href={preview.url} className="btn" target="_blank" title={ 'Zur Anwendung ' + preview.title }><i className="icon_link"></i></a>
            </div>

            <div className="preview-content">
          		<div className="preview-title">{ preview.title }</div>
          		<div className="preview-publisher">{ preview.publisher }, {date}</div>
                
              { this.props.sortType === 'social.sum' && !this.props.isExpanded ?  <SocialItems socialData={preview.social}/> : ''}

              {this.props.isExpanded ? <div className="preview-expanded">
                <div className="preview-description">{ preview.description }</div>
                { preview.byline.length ? <div className="preview-byline"><strong>Autoren:</strong> { this.getBylineLinks(preview.byline) }</div> : '' }
                <SocialItems socialData={preview.social}/>
                <div className="preview-visualform"><strong>Visuelle Form:</strong> { preview.visualform.toString() }</div>
                <div className="preview-category"><strong>Kategorie:</strong> { preview.category.toString() }</div>
                
              </div> : ''}

            </div>
        	</div>
      </div>
    );
  }
});

module.exports = Preview;