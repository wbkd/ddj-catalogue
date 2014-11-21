var React = require('react');
var config = require('../config');
var utils = require('../utils');
var PreviewActions = require('../actions/previewActions')

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

  render: function() {

    var preview = this.props.data, 
      detailLink = '#/projekt/' + preview._id,
      previewImage = preview.serverImageurl ? config.imageUrl + preview.serverImageurl : config.defaultImage,
      imageStyle = {  backgroundImage: 'url(' + previewImage +  ')' },
      date = utils.formatDate(preview.date);

    var cx = React.addons.classSet;
    var classes = cx({
      'preview' : true,
      'is-expanded': this.props.isExpanded 
    });

    return (
      <div className="column">
      	<div className={classes} onClick={this.togglePreview}>
      		<div className='preview-image' style={imageStyle}></div>
          <div className='preview-content'>
        		<div className='preview-title'>{ preview.title }</div>
        		<div className='preview-publisher'>{ preview.publisher }, {date}</div>
            <a href={preview.url} target="_blank" className='btn preview-link'>Zur Anwendung</a>
          </div>
      	</div>
      </div>
    );
  }
});

module.exports = Preview;