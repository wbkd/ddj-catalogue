var React = require('react');

var Sorter = React.createClass({

      getInitialState: function(a) {
        return {
          isActive: false
        }
      },

      toggleDropdown: function() {
        this.setState({isActive: !this.state.isActive})
      },

      render: function() {

        var dropDownStyle = {
          display: this.state.isActive ? 'block' : 'none'
        }

        return (
          <div className="sorter">
            <div onClick={this.toggleDropdown} className="btn-dark btn-sort btn">
              sortieren 
              <i className="arrow_triangle-down"></i>
            </div>
            <ul style={dropDownStyle} className="sorting-drop-down">
              <li className="sort-item">Name</li>
              <li className="sort-item">Beliebt</li>
              <li className="sort-item">Neuste</li>
            </ul>
          </div>)
      }
});

module.exports = Sorter;