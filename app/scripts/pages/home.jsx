var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');
var Content = require('../components/content.jsx');

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<Header hasSubmenu={true}/>
				<Content sharedFavoriteIds={this.props.sharedFavoriteIds} />
				<Footer />
			</div>
		);
	}
});

module.exports = Home;
