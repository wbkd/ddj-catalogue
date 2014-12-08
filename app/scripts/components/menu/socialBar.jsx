var React = require('react');

var SocialBar = React.createClass({

  render: function() {
    return (
      <div className="social-bar">
        <div className="share-fb">
          <i className="social_fazebook"></i>
        </div>
        <div className="share-tw">
          <i className="social_twidda"></i>
        </div>
      </div>
    );
  }

});

module.exports = SocialBar;