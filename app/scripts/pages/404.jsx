var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');

var ErrorPage = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <div className="subpage">
          <div className="subpage-content">

          <h1>404</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero rerum assumenda minima necessitatibus cupiditate, nostrum, aut dolore tempora animi aliquid sit, a quasi itaque quibusdam exercitationem enim? Quisquam, nobis fuga! </p>
        
          </div>
        </div>
        <Footer />
      </div>
    );
  }

});

module.exports = ErrorPage;