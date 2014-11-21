var React = require('react');
var Preview = require('./preview.jsx');
var FilterActions = require('../actions/filterActions');
var previewActions = require('../actions/previewActions');
var PreviewStore = require('../stores/previewStore');
var Sorter = require('./sorter.jsx');

var PreviewList = React.createClass({

      getInitialState: function(a){
        return {
          previews : [],
          isExpadendId : false
        };
      },

      handlePreviewClick: function(previewId,index){
        console.log(arguments);

        
        /*this.setState({
          isExpadendId : previewId
        });*/
      },

      onStatusChange: function(state){
        this.setState(state);
      },

      componentDidMount: function() {
        this.unsubscribe = PreviewStore.listen(this.onStatusChange);
        previewActions.load();
      },

      render: function() {

        var previews = this.state.previews.map(function(preview,i) {
          var isExpanded = this.state.isExpadendId ? this.state.isExpadendId === preview._id : false;
          return (<Preview onClick={this.handlePreviewClick} data={preview} isExpanded={isExpanded} key={preview._id} />);
       
        }.bind(this));

        return (
          <div className="preview-list row centered">
            <div className="clearfix preview-list-header">
              <Sorter />
              <div onClick={FilterActions.toggleFilterMenu} className="btn-dark btn-filter btn"><i className="icon_menu"></i> Liste filtern</div>
            </div>
            <div className="preview-list-content row">
              {previews}
            </div>
          </div>
        );
      }
});

module.exports = PreviewList;