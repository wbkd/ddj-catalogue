var React = require('react');

var MessageBox = React.createClass({
  
  propTypes : {
    isActive : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      isActive : false
    };
  },

  render: function() {

    if(!this.props.isActive){
      return false;
    }
    
    return (
      <div className="message-box">
        <i className="icon_error-triangle"></i> Es wurden keine Projekte gefunden.
      </div>
    );
  }

});

module.exports = MessageBox;