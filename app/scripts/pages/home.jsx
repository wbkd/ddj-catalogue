var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');
var Content = require('../components/content.jsx');

var { State } = require('react-router');

var Home = React.createClass({
  mixins: [State],
  
  render() {
    return (
      <div>
    		<Header hasSubmenu={ true } />
    		<Content />
    		<Footer />
      </div>
    );
  }
});

module.exports = Home;