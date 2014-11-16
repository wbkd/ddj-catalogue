var React = require('react');
var Preview = require('./preview.jsx');
var FilterMenu = require('./filterMenu.jsx');
var PreviewStore = require('../stores/previewStore.js');
var previewActions = require('../actions/previewActions');
var filterActions = require('../actions/filterActions');

var config = require('../config');

var PreviewList = React.createClass({

      getInitialState: function() {
        return {
          previews: []
        }
      },

      onStatusChange: function(state) {
        this.setState(state);
      },

      componentDidMount: function() {
        this.unsubscribe = PreviewStore.listen(this.onStatusChange);
        previewActions.load();
      },

      componentWillUnmount: function() {
        this.unsubscribe();
      },

      toggleFilterMenu : function(){
        filterActions.toggleMenu();
      },

      render: function() {
        var previews = this.state.previews.map(function(preview) {
          return (<Preview data={preview} key={preview._id} />);
        });

        return (
          <div className="preview-list row">
            <div className="preview-list-header row">
              <div className="btn btn-dark" onClick={this.toggleFilterMenu}>Anwendungen filtern</div>
            </div>

            <div className="preview-list-content row">
              {previews}
            </div>
          </div>

        );
      }
});

module.exports = PreviewList;