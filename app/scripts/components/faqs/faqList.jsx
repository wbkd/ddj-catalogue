var React = require('react');
var FAQItem = require('./faqItem.jsx');

var FAQList = React.createClass({

  componentWillMount: function(){
    this.faqData = [
      {title:'foo bars?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit dolorum expedita deserunt nostrum animi, voluptatem magni, aut inventore quidem assumenda voluptas tempora dolores error rem eveniet enim neque vitae.'},
      {title:'bar bar bars?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit dolorum expedita deserunt nostrum animi, voluptatem magni, aut inventore quidem assumenda voluptas tempora dolores error rem eveniet enim neque vitae.'},
      {title:'foo bar?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit dolorum expedita deserunt nostrum animi, voluptatem magni, aut inventore quidem assumenda voluptas tempora dolores error rem eveniet enim neque vitae.'},
      {title:'bar bar bar?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit dolorum expedita deserunt nostrum animi, voluptatem magni, aut inventore quidem assumenda voluptas tempora dolores error rem eveniet enim neque vitae.'},
      {title:'foo barz?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit dolorum expedita deserunt nostrum animi, voluptatem magni, aut inventore quidem assumenda voluptas tempora dolores error rem eveniet enim neque vitae.'},
      {title:'bar bar barz?', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit dolorum expedita deserunt nostrum animi, voluptatem magni, aut inventore quidem assumenda voluptas tempora dolores error rem eveniet enim neque vitae.'}
    ];
  },

  render: function() {

    var faqItems = this.faqData.map(function(el){
      return <FAQItem key={el.title} title={el.title} text={el.text}/>
    });

    return (
      <div className="area faq">
      <div className="centered">
        <h1>FAQ Liste</h1>
        <p>Hier beantworten wir Fragen zum Datenkatalog.</p>
        <ul className="faq-list">
          { faqItems }
        </ul>
      </div>
      </div>
    );
  }

});

module.exports = FAQList;