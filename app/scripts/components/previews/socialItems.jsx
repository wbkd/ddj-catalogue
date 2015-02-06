var React = require('react');
var utils = require('../../utils');

var SocialItems = React.createClass({

  render() {

    if(utils.isUndefined(this.props.socialData) || !this.props.socialData){
      this.props.socialData = { facebook : 0 , twitter : 0 }
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