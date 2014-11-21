var React = require('react');
var PreviewActions = require('../actions/previewActions');

var Sorter = React.createClass({

      sortBy: function(evt,bla,blub) {
        var sortType = evt.target.getAttribute('data-type');
        PreviewActions.sortBy(sortType);
      },

      render: function() {

        return (
          <div className="sorter">
            <span> Sortieren: </span>
            <ul>
              <li data-type="publisher" onClick={this.sortBy} className="sort-item">Herausgeber</li>
              <li data-type="date" onClick={this.sortBy} className="sort-item">Datum</li>
            </ul>
          </div>
        );
      }
});

module.exports = Sorter;