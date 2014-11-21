var React = require('react');
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');

var Info = React.createClass({

	//check and set cookie
	//render only if cookie is not set...

      render: function() {
        console.log(Cookies);
        return <div className="info">Info</div>
        
      }
});

module.exports = Info;