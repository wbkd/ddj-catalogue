var React = require('react');

var SocialItems = React.createClass({

  render: function() {

    return (
      <div className="preview-social">
          <i className="social_facebook"></i> { this.props.socialData.facebook }
          <i className="social_twitter"></i> { this.props.socialData.twitter }  
      </div>
    );
  }

});

module.exports = SocialItems;