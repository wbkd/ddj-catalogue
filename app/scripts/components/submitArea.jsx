var React = require('react');

var SubmitActions = require('../actions/submitActions');
var MenuActions = require('../actions/menuActions');

var SubmitArea = React.createClass({

  propTypes : {
    submitAreaActive: React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    isSuccess: React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      submitAreaActive: false,
      errorMessage: '',
      isSuccess : false
    };
  },
    
  submitForm: function(evt){
    evt.preventDefault();
    var projectUrl = this.refs.projectUrl.getDOMNode().value,
      projectDescription = this.refs.projectDescription.getDOMNode().value;

    if(!projectUrl){
      return SubmitActions.submitProjectError('Bitte geben Sie eine gültige URL an.');
    }

    SubmitActions.submitProject({url : projectUrl, description: projectDescription});
  },
  
  hideSubmitArea: function(){
    MenuActions.hideAllAreas();
    SubmitActions.resetSubmitArea();
  },

  render: function() {

      if(!this.props.isActive){
        return false;
      }

      var ErrorMessage = this.props.errorMessage ? <div className="form-message error">{this.props.errorMessage}</div> : '';
      var SuccessMessage = this.props.isSuccess ? <div className="form-message success">Das Projekt wurde eingereicht.</div> : '';

      return (
            <div className="info">
              <div className="centered">
                <div className="btn-close"><i onClick={this.hideSubmitArea} className="icon_close"></i></div>
                <h1>Projekt einreichen</h1>
                
                <form onSubmit={this.submitForm}>
                  <label>Projekt URL</label>
                  {ErrorMessage}
                  {SuccessMessage}
                  <input ref="projectUrl" type="text" placeholder="http://projekt-url.de"/>
                  <label >Anmerkungen (optional)</label>
                  <textarea ref="projectDescription" placeholder="Anmerkung"></textarea>
                  <button type="submit" className="btn btn-light">Abschicken</button>
                </form>
              </div>
            </div>
      );

    }

});

module.exports = SubmitArea;