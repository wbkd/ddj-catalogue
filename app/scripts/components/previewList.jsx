var React = require('react');
var Preview = require('./preview.jsx');
var filterActions = require('../actions/filterActions');
var Sorter = require('./sorter.jsx');

var PreviewList = React.createClass({

      getInitialState: function(a){
        return {
          previews : [],
          isExpadendId : false,
          isLargeScreen: window.innerWidth > 1280 + 500
        };
      },

      toggleFilterMenu : filterActions.toggleMenu,

      handlePreviewClick: function(previewId,index){
        console.log(arguments);

        
        /*this.setState({
          isExpadendId : previewId
        });*/
      },

      render: function() {

        var previews = this.props.previews.map(function(preview,i) {
          var isExpanded = this.state.isExpadendId ? this.state.isExpadendId === preview._id : false;
          return (<Preview onClick={this.handlePreviewClick} data={preview} isExpanded={isExpanded} key={preview._id} />);
       
        }.bind(this));

        var filterBtn = this.state.isLargeScreen ? '' : <div onClick={filterActions.toggleMenu} className="btn-dark btn-filter btn"><i className="icon_menu"></i> Liste filtern</div>

        return (
          <div className="preview-list row centered">
            <div className="clearfix preview-list-header">
              <Sorter />
              {filterBtn}
            </div>
            <div className="preview-list-content row">
              {previews}
            </div>
          </div>
        );
      }
});

module.exports = PreviewList;