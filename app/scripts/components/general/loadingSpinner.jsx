var React = require('react');

var LoadingSpinner = React.createClass({

  propTypes : {
    isActive : React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      isActive : false
    };
  },

  render() {

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