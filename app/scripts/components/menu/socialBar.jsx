var React = require('react');

var config = require('../../config');

var SocialBar = React.createClass({

  getDefaultProps: function() {
    return {
      sharingText: config.sharingText || '',
      sharingUrl: config.sharingUrl || '',
      hashtags: config.hashtags || ''
    }
  },

  shareFb: function() {
    var props = this.props;
    var url = 'https://www.facebook.com/sharer/sharer.php?u=' + props.sharingUrl;
    window.open(url);
  },

  shareTw: function() {
    var props = this.props;
    var url = 'https://twitter.com/intent/tweet?text=' +  props.sharingText + '&url=' + props.sharingUrl + '&hashtags=' + props.hashtags + ',';
    window.open(url);
  },

  render: function() {
    return (
      <div className="social-bar">
        <div onClick={this.shareFb} className="share-fb">
          <i className="social_fazebook"></i>
        </div>
        <div onClick={this.shareTw} className="share-tw">
          <i className="social_twidda"></i>
        </div>
      </div>
    );
  }

});

module.exports = SocialBar;