/*

	We don't use this class at the moment.
	
*/

var React = require('react');

var Header = require('./header.jsx');
var Menu = require('./menu.jsx');
var PreviewList = require('./previewList.jsx');
var Footer = require('./footer.jsx');


var Application = React.createClass({

	displayName : 'Application',

	render : function(){
		return (
			<div>
				<Menu />
				<Header />
				<PreviewList />
				<Footer />
			</div>
		);
	}

});

module.exports = Application;