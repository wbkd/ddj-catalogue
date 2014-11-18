var React = require('react');
var Header = require('../components/header.jsx');
var FilterablePreviewList = require('../components/filterablePreviewList.jsx');
var Footer = require('../components/footer.jsx');

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<FilterablePreviewList />
				<Footer />
			</div>
		);
	}
});

module.exports = Home;