var React = require('react');

var SubmitActions = require('../../actions/submitActions');
var MenuActions = require('../../actions/menuActions');

var i18n = require('../../i18n/de').submitArea;
var AreaBase = require('./areaBase.jsx');

var SubmitArea = React.createClass({

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
    var projectUrl = this.refs.projectUrl.getDOMNode().value,
      projectDescription = this.refs.projectDescription.getDOMNode().value;

    if(!projectUrl){
      return SubmitActions.submitProjectError(i18n.errorMessage);
    }

    SubmitActions.submitProject({ url : projectUrl, description: projectDescription });
  },
  
  hideSubmitArea() {
    MenuActions.hideAllAreas();
    SubmitActions.resetSubmitArea();
  },

  render() {

    var ErrorMessage = this.props.errorMessage ? <div className="form-message error">{ this.props.errorMessage }</div> : '',
      SuccessMessage = this.props.isSuccess ? <div className="form-message success">{ i18n.successMessage }</div> : '';
      
    return (
      <AreaBase isActive={ this.props.isActive } hideFunction={ this.hideSubmitArea }>
        <h1>{ i18n.title }</h1>
        <form onSubmit={this.submitForm}>
          <label>{ i18n.projectUrlLabel }</label>
          {ErrorMessage}
          {SuccessMessage}
          <input ref="projectUrl" type="text" placeholder="http://projekt-url.de"/>
          <label>{ i18n.detailsLabel }</label>
          <textarea ref="projectDescription" placeholder="Anmerkung"></textarea>            
          <button type="submit" className="btn btn-success">{ i18n.send }</button>
        </form>
      </AreaBase>
    );
  }

});

module.exports = SubmitArea;