var React = require('react');
var utils = require('../../utils');

var SocialItems = React.createClass({

  render: function() {

    if(utils.isUndefined(this.props.socialData) || !this.props.socialData){
      //return false;
      this.props.socialData = { facebook : 12 , twitter : 12 }
    }

    return (
      <div className="preview-social">
          <i className="social_fazebook"></i> { utils.numberFormat(this.props.socialData.facebook) }
          <i className="social_twidda"></i> { utils.numberFormat(this.props.socialData.twitter) }  
      </div>
    );
  }

});

module.exports = SocialItems;