var React = require('react');
var PreviewActions = require('../actions/previewActions');
var cx = React.addons.classSet;

var Sorter = React.createClass({

      sortBy: function(evt) {
        var sortType = evt.target.getAttribute('data-type');
        PreviewActions.sortBy(sortType);
      },

      render: function() {
        var sorters = this.props.sorts.map(function(item) {
                  var classes = cx({
                    'sort-item': true,
                    'active': this.props.active === item.sortBy
                  });
                  return <li data-type={item.sortBy} onClick={this.sortBy} className={classes}>{item.name}</li>
                }.bind(this));
        
        return (
          <div className="sorter">
            <span> Sortieren: </span>
            <ul>
              {sorters}
            </ul>
          </div>
        );
      }
});

module.exports = Sorter;