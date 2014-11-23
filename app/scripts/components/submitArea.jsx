var React = require('react');

var SubmitActions = require('../actions/submitActions');
var MenuActions = require('../actions/menuActions');

var SubmitArea = React.createClass({

  submitForm: function(evt){
    evt.preventDefault();
    var projectUrl = this.refs.inputProjectUrl.getDOMNode().value;
    SubmitActions.submitProject(projectUrl);
  },

  render: function() {

      if(!this.props.submitAreaActive){
        return false;
      }

      return (
            <div className="info">
              <div className="centered">
                <div className="btn-close"><i onClick={MenuActions.toggleSubmitArea} className="icon_close"></i></div>
                <h1>Projekt einreichen</h1>
                
                <form onSubmit={this.submitForm}>
                  <label>Projekt URL:</label>
                  <input ref="inputProjectUrl" type="text" placeholder="http://projekt-url.de"/>
                  <button type="submit" className="btn btn-light">Abschicken</button>
                </form>
              </div>
            </div>
      );

    }

});

module.exports = SubmitArea;