var React = require('react/addons');
var cx = React.addons.classSet;

var config = require('../../config');
var utils = require('../../utils');

var SocialItems = require('./socialItems.jsx');
var DetailFilter = require('./detailFilter.jsx');

var PreviewActions = require('../../actions/previewActions')
var FavoritesActions = require('../../actions/favoritesActions')
var FilterActions = require('../../actions/filterActions');

var Velocity = require('velocity-animate')
var store = require('store');

var Preview = React.createClass({

  propTypes : {
    isExpanded : React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      isExpanded : false
    };
  },

  togglePreview() {

    PreviewActions.toggleExpandedPreview(this.props._id);

    if(!this.props.isExpanded) {
      Velocity(this.getDOMNode(), 'scroll', { duration: 400, offset: -50 });
      FilterActions.hideFilterMenu();
    }
  },

  togglePreviewCard(evt) {
    if(!this.props.isExpanded){
      this.togglePreview();
    }
  },

  starPreview(evt) {
    FavoritesActions.starPreview(this.props);
    evt.preventDefault();
    evt.stopPropagation();
  },

  getDetailFilter(descriptions, groupName, isExpanded) {
    var links = [];
    descriptions.forEach(function(name, i) {
      links.push(<DetailFilter key={"bl_" + i} text={name} addComma={i < descriptions.length - 1} description={groupName} isActive={isExpanded}/>);
    });
    return links;
  },
                         
  getByline(preview) {
    if(!preview.byline.length){
      return '';
    }                     
    return <div className="preview-byline"><strong>Autoren:</strong> { this.getDetailFilter(preview.byline, 'byline',this.props.isExpanded) }</div>;                     
  },
  
  getOrganisation(preview) {
    if(!preview.organisation.length){
      return '';
    }                     
    return <div className="preview-organization"><strong>Agentur:</strong> { this.getDetailFilter(preview.organisation, 'publisher',this.props.isExpanded) }</div>;                  
  },

  render() {

    var preview = this.props, 
      detailLink = '#/projekt/' + preview._id,
      previewImage = preview.serverImageurl ? config.imageUrl + preview.serverImageurl : config.defaultImage,
      imageStyle = { backgroundImage: 'url(' + previewImage +  ')' },
      date = utils.formatDate(preview.date),
      classes = cx({
        preview : true,
        clearfix : true,
        'is-expanded': this.props.isExpanded,
        'is-stared':this.props.isStared
      });

    return (
      <div className="column">
        <div className={ classes } onClick={ this.togglePreviewCard }>
          <div onClick={ this.togglePreview } className="close-btn">
            <i className="icon_close"></i>
          </div>
          <span className='preview-image'style={ imageStyle } href={ preview.url } target="_blank"></span>

          <div className="btn-group">
            { store.enabled ? <div onClick={ this.starPreview } className="btn btn-star"><i className="icon_star"></i></div> : ''}
            <a href={ preview.url } className="btn preview-link" target="_blank" title={ 'Zur Anwendung "' + preview.title + '"' }><i className="icon_link"></i></a>
          </div>

          { (this.props.sortType === "social.sum" && !this.props.isExpanded) || this.props.isExpanded ? <SocialItems socialData={ preview.social }/> : '' }

          <div className="preview-content">
            <div className="preview-title">
              { preview.title }
            </div>
            <div className="preview-publisher">
              { this.getDetailFilter(preview.publisher, 'publisher',this.props.isExpanded) }, {date}
            </div>     

            <div className="preview-expanded">
              <div className="preview-description">
                { preview.description }
              </div>
              { this.getByline(preview) }
              <div className="preview-visualform">
                <strong>Visuelle Form:</strong> { this.getDetailFilter(preview.visualform, 'visualform',this.props.isExpanded) }
              </div>
              <div className="preview-category">
                <strong>Kategorie:</strong> { this.getDetailFilter(preview.category, 'category',this.props.isExpanded) }
              </div>
              { this.getOrganisation(preview) }
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Preview;