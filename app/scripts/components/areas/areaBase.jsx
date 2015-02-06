var React = require('react');

var AreaBase = React.createClass({

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
    
    var classes = this.props.extraClass ? 'area ' + this.props.extraClass : 'area';
    
    return (
      <div className={ classes }>
        <div className="centered">
        
          <div className="clearfix">
            <div className="btn btn-close" onClick={ this.props.hideFunction }>
              <i className="icon_close"></i>schließen
            </div>
          </div>
          
          { this.props.children }
      
        </div>
      </div>
    );
  }
  
});

module.exports = AreaBase;