var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');
var Content = require('../components/content.jsx');

var Router = require('react-router');

var Home = React.createClass({
  mixins: [Router.State],
  
  render() {
      
    return (
      <div>
		<Header hasSubmenu={ true }/>
		<Content sharedFavoriteIds={ this.getParams().sharedFavoriteIds } />
		<Footer />
      </div>
    );
  }
});

module.exports = Home;
