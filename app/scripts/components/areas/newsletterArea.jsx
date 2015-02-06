var React = require('react');

var SubmitActions = require('../../actions/submitActions');
var MenuActions = require('../../actions/menuActions');

var i18n = require('../../i18n/de').newsletterArea;
var AreaBase = require('./areaBase.jsx');

var NewsletterArea = React.createClass({

  propTypes : {
    errorMessage: React.PropTypes.string,
    isSuccess: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      errorMessage: '',
      isSuccess : false
    };
  },
    
  submitForm(evt) {
    evt.preventDefault();
    var email = this.refs.email.getDOMNode().value;

    if(!email){
      return SubmitActions.submitEmailError(i18n.errorMessage);
    }

    SubmitActions.submitEmail({ email : email });
  },
  
  hideNewsletterArea() {
    MenuActions.hideAllAreas();
    SubmitActions.resetNewsletterArea();
  },

  render() {

    var ErrorMessage = this.props.errorMessage ? <div className="form-message error">{ this.props.errorMessage }</div> : '',
      SuccessMessage = this.props.isSuccess ? <div className="form-message success">{ i18n.successMessage }</div> : '';

    return (
      <AreaBase isActive={ this.props.isActive } hideFunction={ this.hideNewsletterArea }>
        <h1>{ i18n.title }</h1>
        <p>{ i18n.text }</p>
        <form onSubmit={ this.submitForm }>
          <label>{ i18n.emailLabel }</label>
          {ErrorMessage}
          {SuccessMessage}
          <input ref="email" type="text" placeholder="e@mail.de"/>
          <button type="submit" className="btn btn-success">{ i18n.send }</button>
        </form>
      </AreaBase>
    );
  }

});

module.exports = NewsletterArea;