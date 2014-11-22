var React = require('react');
var PreviewActions = require('../actions/previewActions');
var cx = React.addons.classSet;

var SortItem = require('./sortItem.jsx')

var Sorter = React.createClass({


      sortBy: function(sortType) {
        // if user clicks on a selected sorter => change sortOder otherwise change only sortType 
        var isNewSortOrderDesc = this.props.sortType === sortType ? !this.props.isSortOrderDesc : this.props.isSortOrderDesc;

        PreviewActions.sortBy(sortType, isNewSortOrderDesc);
      },

      render: function() {        
        return (
          <div className="sorter">
            <span> Sortieren: </span>
            <ul>
              <SortItem onClick={this.sortBy.bind(this,'publisher')} type="publisher" title="Herausgeber" sortType={this.props.sortType} isSortOrderDesc={this.props.isSortOrderDesc}/>
              <SortItem onClick={this.sortBy.bind(this,'date')} type="date" title="Datum" sortType={this.props.sortType} isSortOrderDesc={this.props.isSortOrderDesc}/>
            </ul>
          </div>
        );
      }
});

module.exports = Sorter;