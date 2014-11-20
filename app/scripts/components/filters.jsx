var React = require('react/addons');

var Filters = React.createClass({

	displayName: 'Filters',

  fakeData: [
    {
      name: 'Verlag',
      filters: [
        'SPON',
        'SZ',
        'ZEIT',
        'WELT',
        'NZZ'
      ]
    },
    {
      name: 'Verlag',
      filters: [
        'SPON',
        'SZ',
        'ZEIT',
        'WELT',
        'NZZ'
      ]
    },
    {
      name: 'Verlag',
      filters: [
        'SPON',
        'SZ',
        'ZEIT',
        'WELT',
        'NZZ'
      ]
    }
  ],

  getFilters: function() {
    
    var x = <div>
            {
              this.fakeData.map(function(d) {
                var items = [];
                d.filters.map(function(filter) {
                  items.push(<li>{filter}</li>);
                });

                return <div>
                  <div className="filter-header">{d.name}</div>
                  <ul>{items}</ul>
                  </div>
              })
            }
            </div>

    return x
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