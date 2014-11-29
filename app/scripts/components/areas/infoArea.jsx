var React = require('react');

var MenuActions = require('../../actions/menuActions.js');
var MenuStore = require('../../stores/menuStore');

var InfoArea = React.createClass({

  propTypes : {
    isActive : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      isActive : false
    };
  },

  hideInfo: function(){ 
    MenuActions.hideInfo();
  },
  
  render: function() {

    if(!this.props.isActive){
      return false;
    }

    return (
      <div className="area">
        <div className="centered">
          <div className="clearfix">
            <div className="btn btn-close" onClick={this.hideInfo}>
              <i className="icon_close"></i>
              Fenster schließen
            </div>
          </div>

        	<h1>Über dieses Projekt</h1>
        	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, modi, adipisci. Ab ducimus, nemo eligendi eaque, eum magni adipisci consectetur labore laborum commodi hic nulla. Dolore aspernatur laborum, sapiente commodi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, modi, adipisci. Ab ducimus, nemo eligendi eaque, eum magni adipisci consectetur labore laborum commodi hic nulla. Dolore aspernatur laborum, sapiente commodi.</p>
        </div>
      </div>
    );

  }
});

module.exports = InfoArea;