var React = require('react');
var config = require('../config');
var PreviewStore = require('../stores/previewStore.js');
var previewActions = require('../actions/previewActions');

var PreviewDetail = React.createClass({

	    getInitialState: function() {
        return {
          detail: {}
        }
      },

      onStatusChange: function(state) {
        this.setState(state);
      },

      componentDidMount: function() {
        this.unsubscribe = PreviewStore.listen(this.onStatusChange);
        previewActions.loadById(this.props.id);
      },

      componentWillUnmount: function() {
        this.unsubscribe();
      },

      render: function() {

      	var preview = this.state.detail,
      		previewImage = preview.serverImageurl ? config.imageUrl + preview.serverImageurl : config.defaultImage,
	      	imageStyle = {  backgroundImage: 'url(' + previewImage +  ')' };
	   
        return (
        	<div className="subpage">
        		<div className="subpage-content preview-detail">

	    			<a className="btn btn-dark" href="#/projekte">Zurück</a>

	        		<div className="preview-detail-image" style={imageStyle}></div>

	        		<div className="preview-detail-content">
		        		<h1 className="preview-detail-title">{preview.title}</h1>
		        		<h3 className="preview-detail-publisher">Erschienen bei: {preview.publisher}</h3>

		        		<div className="preview-detail-description">
		        			<p>{preview.description || 'Keine Beschreibung verfügbar'}</p>
		        		</div>

		        		<div className="preview-detail-byline">
		        			<i>Von {preview.byline ? preview.byline.toString() : 'Keine Angaben'}</i>
		        		</div>

		        		<a className="btn btn-dark" href={ preview.url } target="_blank">zur Anwendung</a>
	        		</div>

        		</div>
        	</div>
        );
      }

});

module.exports = PreviewDetail;