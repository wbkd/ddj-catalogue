var React = require('react');
var Preview = require('./preview.jsx');
var MenuActions = require('../actions/menuActions');
var Sorter = require('./sorter.jsx');

var PreviewList = React.createClass({

      getInitialState: function(a){
        return {
          previews : [],
          isExpadendId : false
        };
      },

      toggleFilterMenu : MenuActions.toggleMenu,

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

        return (
          <div className="preview-list row centered">
            <div className="clearfix preview-list-header">
              <Sorter />
              <div onClick={MenuActions.toggleMenu} className="btn-dark btn-filter btn"><i className="icon_menu"></i> Liste filtern</div>
            </div>
            <div className="preview-list-content row">
              {previews}
            </div>
          </div>
        );
      }
});

module.exports = PreviewList;