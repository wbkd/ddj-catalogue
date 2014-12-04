var React = require('react');
var FAQItem = require('./faqItem.jsx');

var MenuActions = require('../../actions/menuActions.js');
var FaqActions = require('../../actions/faqActions.js')

var FAQArea = React.createClass({

  propTypes : {
    isActive : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      isActive : false,
      faqData : []
    };
  },

  componentWillMount: function(){
    FaqActions.loadFaqData();
  },

  render: function() {

    if(!this.props.isActive){
      return false;
    }

    var faqItems = this.props.faqData.map(function(el){
      return <FAQItem key={el.question} title={el.question} text={el.answer}/>
    });

    return (
      <div className="area faq">
        <div className="centered">

          <div className="clearfix">
            <div className="btn btn-close" onClick={MenuActions.hideAllAreas}>
              <i className="icon_close"></i>schließen
            </div>
          </div>

          <div className="area-text">
            <h1>FAQ Liste</h1>
            <p>Hier beantworten wir Fragen zum Datenkatalog.</p>
            <ul className="faq-list">
              { faqItems }
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = FAQArea;