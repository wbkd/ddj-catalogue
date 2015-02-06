var React = require('react');

var config = require('../../config');

var SocialBar = React.createClass({

  getDefaultProps() {
    return {
      sharingText: config.sharingText || '',
      sharingUrl: config.sharingUrl || '',
      hashtags: config.hashtags || ''
    }
  },

  getFbHref() {
    return 'https://www.facebook.com/sharer/sharer.php?u=' + this.props.sharingUrl;
  },

  getTwitterHref() {
    return 'https://twitter.com/intent/tweet?text=' +  this.props.sharingText + '&url=' + this.props.sharingUrl + '&hashtags=' + this.props.hashtags + ',';
  },

  render() {
    
    return (
      <div className="social-bar">
        <a href={ this.getFbHref() } className="share-fb" target="_blank">
          <i className="social_fazebook"></i>
        </a>
        <a href={ this.getTwitterHref() } className="share-tw" target="_blank">
          <i className="social_twidda"></i>
        </a>
      </div>
    );
  }

});

module.exports = SocialBar;