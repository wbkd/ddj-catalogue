var React = require('react');

var LoadingSpinner = React.createClass({

  propTypes : {
    isLoading : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      isLoading : false
    };
  },

  render: function() {

    if(!this.props.isLoading){
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