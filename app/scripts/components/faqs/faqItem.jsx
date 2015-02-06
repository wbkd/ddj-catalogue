var React = require('react');

var FAQItem = React.createClass({

  render() {
    return (
      <li className="faq-item">
        <h3 className="faq-item-title">{ this.props.question }</h3>
        <p className="faq-item-text">{ this.props.answer }</p>
      </li>
    );
  }

});

module.exports = FAQItem;