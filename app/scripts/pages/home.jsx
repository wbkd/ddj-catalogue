var React = require('react');
var Header = require('../components/header.jsx');
var FilterablePreviewList = require('../components/filterablePreviewList.jsx');
var Footer = require('../components/footer.jsx');
var FilterMenu = require('../components/filterMenu.jsx');
var InfoBox = require('../components/info.jsx');

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<InfoBox />
				<FilterMenu />
				<FilterablePreviewList />
				<Footer />
			</div>
		);
	}
});

module.exports = Home;