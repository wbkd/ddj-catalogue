var React = require('react');
var LoadingSpinner = require('../general/loadingSpinner.jsx');
var EmbedItem = require('./embedItem.jsx');

var EmbedList = React.createClass({

  render: function() {
    
    var embedItems = this.props.previews.map(function(data){
      return (<EmbedItem {...data} key={ 'embeditem_' + data._id} />);
    }.bind(this));
          
    return (
      <div className="embed-list centered">
        <div className="row">{ embedItems }</div>
        <LoadingSpinner isActive={this.props.isLoading} />
      </div>
    );
  }

});

module.exports = EmbedList;
