var React = require('react');
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');
var infoActions = require('../actions/infoActions');

var Info = React.createClass({

		getInitialState: function() {
			var isHidden = typeof Cookies.get('ddj-infobox') !== 'undefined';
			return {
				isHidden: isHidden
			};
		},

		onStatusChange: function(state) {
			this.setState(state);
		},

		componentDidMount: function() {
			
			//this.listen(infoActions.toggleInfo,this.hideMenu);
			//FilterStore.listen(this.shiftContent);
		},

		hideInfo: function() {
			this.setState({isHidden: true});
			Cookies.set('ddj-infobox', '1');
		},


      render: function() {
      	if(!this.state.isHidden) {
      		 return (<div className="row centered info">
        		<div className="btn-close"><i onClick={this.hideInfo} className="icon_close"></i></div>
        		<h1>Über dieses Projekt</h1>
        		<p>Lorem Ipsum Lorem Ipsum</p>
        	   </div>)
      	}
      	else {
      		return <span></span>
      	}
      }
});

module.exports = Info;