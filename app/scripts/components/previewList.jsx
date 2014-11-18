var React = require('react');
var Preview = require('./preview.jsx');

var PreviewList = React.createClass({

      getInitialState: function(a){
        return {
          previews : [],
          isExpadendId : false
        };
      },

      toggleFilterMenu : function(){
        filterActions.toggleMenu();
      },

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