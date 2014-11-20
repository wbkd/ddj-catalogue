var React = require('react/addons');
var Filter = require('./filter.jsx');

var Filters = React.createClass({

	displayName: 'Filters',

  fakeData: [
    {
      name: 'Verlag',
      filters: [
        'Spiegel Online',
        'Süddeutsche Zeitung',
        'Welt Online',
        'Zeit Online',
        'Berliner Morgenpost'
      ]
    },
    {
      name: 'Visual Form',
      filters: [
        'Chart',
        'Diagramm',
        'Karte',
        'Sonstige'
      ]
    }
  ],

  onFilterSelect: function(filter) {
    console.log(filter.target);
  },

  getFilters: function() {
    var self = this;
    return <div>
            {
              this.fakeData.map(function(d) {
                var items = [];
                d.filters.map(function(filter) {
                  items.push(<Filter text={filter} category={d.name} />);
                  //items.push(<li onClick={self.onFilterSelect}>{filter}</li>);
                });

                return <div>
                  <div className="filter-header">{d.name}</div>
                  <ul className="tag-list">{items}</ul>
                  </div>
              })
            }
            </div>
  },

  render: function() {
    return (
    	<div className="filter-list">
        {this.getFilters()}
      </div>
    );
  }
});

module.exports = Filters;