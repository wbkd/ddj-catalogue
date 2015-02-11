var React = require('react');
var config = require('../../config');
var utils = require('../../utils');

var EmbedItem = React.createClass({

  render() {
    var previewImage = this.props.serverImageurl ? config.imageUrl + this.props.serverImageurl : config.defaultImage,
      style = { backgroundImage : 'url(' + previewImage + ')' },
      formattedDate = utils.formatDate(this.props.date);
    
    return (
      <div className="embed-column">
        <div className="embed-item preview">
          <a href={ this.props.url } target="_blank" className="clearfix">
            <div className="preview-image" style={ style }></div>
          </a>
          <div className="embed-content preview-content">
            <div className="embed-title preview-title">{ this.props.title }</div>
            <div className="preview-publisher">{ this.props.publisher }, { formattedDate }</div>
            { false ? <div className="embed-byline"><strong>Autoren:</strong> { this.props.byline.join(', ') }</div> : '' }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EmbedItem;