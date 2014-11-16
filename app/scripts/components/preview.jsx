var React = require('react');
var config = require('../config');

var Preview = React.createClass({

  displayName: 'Preview',

  render: function() {

    var preview = this.props.data, 
      detailLink = '#/projekt/' + preview._id,
      previewImage = preview.serverImageurl ? config.imageUrl + preview.serverImageurl : config.defaultImage,
      imageStyle = {  backgroundImage: 'url(' + previewImage +  ')' };

    return (
      <a className='column' href={detailLink}>
      	<div className='preview'>
      		<div className='preview-image' style={imageStyle}></div>
          <div className='preview-content'>
        		<div className='preview-title'>{ preview.title }</div>
        		<div className='preview-publisher'>{ preview.publisher }</div>
          </div>
      	</div>
      </a>
    );
  }
});

module.exports = Preview;