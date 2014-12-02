var React = require('react');
var utils = require('../../utils');

var SocialItems = React.createClass({

  render: function() {

    if(utils.isUndefined(this.props.socialData)){
      return false;
    }

    return (
      <div className="preview-social">
          <i className="social_facebook"></i> { utils.numberFormat(this.props.socialData.facebook) }
          <i className="social_twitter"></i> { utils.numberFormat(this.props.socialData.twitter) }  
      </div>
    );
  }

});

module.exports = SocialItems;