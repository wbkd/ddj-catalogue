var React = require('react');
var FAQItem = require('./faqItem.jsx');

var MenuActions = require('../../actions/menuActions.js');
var FaqActions = require('../../actions/faqActions.js')

var i18n = require('../../i18n/de').faqArea;
var AreaBase = require('../areas/areaBase.jsx');

var FAQArea = React.createClass({

  getDefaultProps() {
    return {
      faqData : []
    };
  },

  componentWillMount() {
    FaqActions.loadFaqData();
  },

  render() {

    var faqItems = this.props.faqData.map( faqItem => <FAQItem key={ faqItem.question } { ...faqItem } /> );

    return (
      <AreaBase isActive={ this.props.isActive } hideFunction={ MenuActions.hideAllAreas } extraClass="faq">
        <div className="area-text">
          <h1>{ i18n.title }</h1>
          <p>{ i18n.text }</p>
          <ul className="faq-list">
            { faqItems }
          </ul>
        </div>      
      </AreaBase>
    );
  }

});

module.exports = FAQArea;