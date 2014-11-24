var React = require('react');

var LoadingSpinner = React.createClass({

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
      <div className="loading-spinner">
        <i className="spin icon_loading"></i>
      </div>
    );
  }

});

module.exports = LoadingSpinner;