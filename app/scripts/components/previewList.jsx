var React = require('react');
var Preview = require('./preview.jsx');

var PreviewList = React.createClass({

      propTypes : function(){
        previews : React.PropTypes.array
      },

      getDefaultProps: function(){
        return {
          previews : []
        };
      },

      toggleFilterMenu : function(){
        filterActions.toggleMenu();
      },

      render: function() {
        var previews = this.props.previews.map(function(preview) {
          return (<Preview data={preview} key={preview._id} />);
        });

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