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

          <div className="area-text">
        	  <h1>Über dieses Projekt</h1>
        	  <p>Dieser Katalog ist eine Zusammenstellung von datenjournalistischen Projekten aus dem deutschsprachigen Raum. Der Katalog wurde im Winter 2014 von <a href="http://www.webkid.io">webkid</a> und <a href="http://www.dacosto.de">DACOSTO</a> ins Leben gerufen. Er umfasst Datenprojekte von diversen Medienhäusern - verzeichnet aber auch unabhängig entstandene Projekte, wie bspw. im Rahmen von Code for Germany. Diese Sammlung erhebt keinen Anspruch auf Vollständigkeit. Sie wird von uns weitergepflegt werden</p>
            <p>Ihr könnt eure eigenen Datengeschichten einreichen. Bei Hinweisen und Ergänzungen zu unserem DDJ-Katalog bitte melden. Ansonsten wünschen wir viel Spaß beim stöbern.</p>
            <p>Inspiration: <a href="http://collection.marijerooze.nl/">Graphics Collection</a> von Marije Rooze.</p>
          </div>
        </div>
      </div>
    );

  }
});

module.exports = InfoArea;