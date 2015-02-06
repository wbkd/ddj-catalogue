var React = require('react');

var MenuActions = require('../../actions/menuActions.js');
var AreaBase = require('./areaBase.jsx');

var i18n = require('../../i18n/de').infoArea;

var InfoArea = React.createClass({

  render: function() {
    
    return (
      <AreaBase hideFunction={ MenuActions.hideInfo } isActive={ this.props.isActive }>
        <div className="area-text">
          <h1>{ i18n.title }</h1>
          <p dangerouslySetInnerHTML={{ __html : i18n.text }}></p>
          <p className="last-update">Stand: 06.02.2015</p>
        </div>
      </AreaBase>
    );
  }
  
});

module.exports = InfoArea;