var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');
var Content = require('../components/content.jsx');

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<Header activeFilters={this.props.activeFilters} />
				<Content activeFilters={this.props.activeFilters} sharedFavoriteIds={this.props.sharedFavoriteIds} />
				<Footer />
			</div>
		);
	}
});

module.exports = Home;