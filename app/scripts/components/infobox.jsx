var React = require('react');

var MenuActions = require('../actions/menuActions.js');
var MenuStore = require('../stores/menuStore');


var Info = React.createClass({

    propTypes : {
      infoActive : React.PropTypes.bool
    },

    getDefaultProps: function(){
      return {
        infoActive : false
      };
    },
    
    render: function() {

      if(!this.props.infoActive){
        return false;
      }

      return (
            <div className="info">
              <div className="centered">
              	<div className="btn-close"><i onClick={MenuActions.hideInfo} className="icon_close"></i></div>
              	<h1>Über dieses Projekt</h1>
              	<p>Lorem Ipsum Lorem Ipsum</p>
              </div>
            </div>
      );

    }
});

module.exports = Info;