var React = require('react');
var Preview = require('./preview.jsx');
var FilterActions = require('../actions/filterActions');
var PreviewActions = require('../actions/previewActions');
var PreviewStore = require('../stores/previewStore');
var Sorter = require('./sorter.jsx');
var config = require('../config');

var PreviewList = React.createClass({

      getInitialState: function(a){
        return {
          previews : [],
          expandedId : null,
          sortType : 'date',
          isSortOrderDesc : true // should be desc or asc
        };
      },

      onStatusChange: function(newState){
        newState.expandedId = this.state.expandedId === newState.expandedId ? null : newState.expandedId;
        this.setState(newState);
      },

      componentDidMount: function() {
        this.unsubscribe = PreviewStore.listen(this.onStatusChange);
        //load initial previews
        PreviewActions.load();
      },

      toggleFilterMenu: function(){
        FilterActions.toggleFilterMenu();
      },

      render: function() {
        var sorts = [
          {
            name: 'Herausgeber',
            sortBy: 'publisher'
          },
          {
            name: 'Datum',
            sortBy: 'date'
          }
        ]

        var previews = this.state.previews.map(function(preview,i) {
          var isExpanded = this.state.expandedId ? this.state.expandedId === preview._id : false,
            isStared = this.props.favoriteIds.indexOf(preview._id) !== -1;

          return (<Preview data={preview} isStared={isStared} isExpanded={isExpanded} key={preview._id} />);
       
        }.bind(this));

        return (
          <div className="preview-list row centered">
            <div className="clearfix preview-list-header">
              <div onClick={this.toggleFilterMenu} className="btn btn-filter btn"><i className="icon_menu"></i> Liste filtern</div>
              <Sorter isSortOrderDesc={this.state.isSortOrderDesc} sortType={this.state.sortType} />
            </div>
            <div className="preview-list-content row">
              {previews}
            </div>
          </div>
        );
      }
});

module.exports = PreviewList;