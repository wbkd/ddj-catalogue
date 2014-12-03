var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');
var FAQList = require('../components/faqs/faqList.jsx');

var FAQs = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <FAQList/>
        <Footer />
      </div>
    );
  }
});

module.exports = FAQs;