var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');

var ErrorPage = React.createClass({

  render: function() {
    return (
      <div>
        <Header hasSubmenu={false}/>
        <div className="subpage">
          <div className="subpage-content">

          <h1>404!</h1>
          <p>Die Seite ist nicht verfügbar.</p>
        
          </div>
        </div>
        <Footer />
      </div>
    );
  }

});

module.exports = ErrorPage;