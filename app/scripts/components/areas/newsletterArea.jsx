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
      return SubmitActions.submitEmailError('Bitte geben Sie eine gültige E-Mail an.');
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
          <div className="info">
            <div className="centered">
              <div className="btn-close"><i onClick={this.hideNewsletterArea} className="icon_close"></i></div>
              <h1>Newsletter</h1>
              <p>Tragen Sie sich bei unserem Newsletter ein, um aktuelle Mitteilungen von DACOSTO und webkid zu bekommen.</p>
              <form onSubmit={this.submitForm}>
                <label>E-Mail</label>
                {ErrorMessage}
                {SuccessMessage}
                <input ref="email" type="text" placeholder="e@mail.de"/>
                <button type="submit" className="btn btn-light">Abschicken</button>
              </form>
            </div>
          </div>
    );

    }

});

module.exports = NewsletterArea;