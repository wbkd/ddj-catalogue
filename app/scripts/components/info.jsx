var React = require('react');
var MenuActions = require('../actions/menuActions.js');
var MenuStore = require('../stores/menuStore');
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');

var Info = React.createClass({

		getInitialState: function() {
			return {
				infoActive: typeof Cookies.get('ddj-infobox') === 'undefined'
			}
		},

		onStatusChange: function(state) {
			console.log(state);
			this.setState(state);
		},

		componentDidMount: function() {
			MenuStore.listen(this.onStatusChange);
		},

		hideInfo: function() {
			MenuActions.hideInfo();
		},

      render: function() {
      	if(this.state.infoActive) {
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