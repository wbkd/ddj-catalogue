var React = require('react');
var Header = require('../components/header.jsx');
var Footer = require('../components/footer.jsx');
var FilterMenu = require('../components/filterMenu.jsx');
var Content = require('../components/content.jsx');

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<Content sharedFavoriteIds={this.props.sharedFavoriteIds}/>
				<Footer />
			</div>
		);
	}
});

module.exports = Home;