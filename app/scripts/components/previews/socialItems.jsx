var React = require('react');
var Utils = require('../../utils');

var SocialItems = React.createClass({

  render: function() {

    return (
      <div className="preview-social">
          <i className="social_facebook"></i> { Utils.numberFormat(this.props.socialData.facebook) }
          <i className="social_twitter"></i> { Utils.numberFormat(this.props.socialData.twitter) }  
      </div>
    );
  }

});

module.exports = SocialItems;