var React = require('react');
var Filter = require('./filter.jsx');

var FilterGroup = React.createClass({

  getInitialState: function() {
        return { 
          searchString: ''
        }
  },

  handleChange: function(e) {
    this.setState({searchString:e.target.value});
  },

  render: function() {
    var data = this.props.data;
    var searchString = this.state.searchString;


    var filters = data.filters.map(function(filter,i) {
      var checked = this.props.selected === filter;
      return <Filter key={filter + i + Math.random()} text={filter} category={data.dbId} checked={checked}/>
    }.bind(this));


    //filter results: http://jsfiddle.net/martinaglv/3N6D3/light/
    if(searchString.length > 0) {
      filters = filters.filter(function(f) {
        if(f.props.text.toLowerCase().match(searchString.toLowerCase())) {
          return f;
        }
      });
    }

    var input = data.isFilterable ? <input value={this.state.searchString} onChange={this.handleChange} placeholder={data.name + ' durchsuchen...'} type="text"/> : '';

    return (
    	<div className="filter-group">
        <div className="filter-header">{data.name}</div>
        {input}
        <ul className="tag-list">
          { filters }
        </ul>
      </div>
    )
  }
});

module.exports = FilterGroup;