var React = require('react');

var FAQItem = React.createClass({

  render: function() {
    return (
      <li className="faq-item">
      <h3 className="faq-item-title">{this.props.title}</h3>
      <p className="faq-item-text">{this.props.text}</p>
      </li>
    );
  }

});

module.exports = FAQItem;