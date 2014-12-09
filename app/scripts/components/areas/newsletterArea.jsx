var React = require('react');

var SubmitActions = require('../../actions/submitActions');
var MenuActions = require('../../actions/menuActions');

var NewsletterArea = React.createClass({

  propTypes : {
    isActive: React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    isSuccess: React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      isActive: false,
      errorMessage: '',
      isSuccess : false
    };
  },
    
  submitForm: function(evt){
    evt.preventDefault();
    var email = this.refs.email.getDOMNode().value;

    if(!email){
      return SubmitActions.submitEmailError('Bitte gib eine gültige E-Mail Adresse an.');
    }

    SubmitActions.submitEmail({email : email});
  },
  
  hideNewsletterArea: function(){
    MenuActions.hideAllAreas();
    SubmitActions.resetNewsletterArea();
  },

  render: function() {

    if(!this.props.isActive){
      return false;
    }

    var ErrorMessage = this.props.errorMessage ? <div className="form-message error">{this.props.errorMessage}</div> : '';
    var SuccessMessage = this.props.isSuccess ? <div className="form-message success">Ihre E-Mail wurde eingetragen.</div> : '';

    return (
          <div className="area">
            <div className="centered">
              <div className="clearfix">
                <div className="btn btn-close" onClick={this.hideNewsletterArea}>
                  <i className="icon_close"></i>
                  schließen
                </div>
              </div>
              <h1>Newsletter</h1>
              <p>Trag dich in unseren Newsletter ein, um ein mal im Monat über neue Projekte informiert zu werden.</p>
              <form onSubmit={this.submitForm}>
                <label>Deine E-Mail</label>
                {ErrorMessage}
                {SuccessMessage}
                <input ref="email" type="text" placeholder="e@mail.de"/>
                <button type="submit" className="btn btn-success">Abschicken</button>
              </form>
            </div>
          </div>
    );

    }

});

module.exports = NewsletterArea;