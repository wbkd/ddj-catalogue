var React = require('react');
var LoadingSpinner = require('../general/loadingSpinner.jsx');
var EmbedItem = require('./embedItem.jsx');

var EmbedList = React.createClass({

  render() {
    
    var embedItems = this.props.previews.map( data => <EmbedItem {...data} key={ 'embeditem_' + data._id } />);
          
    return (
      <div className="embed-list centered">
        <div className="row">{ embedItems }</div>
        <LoadingSpinner isActive={ this.props.isLoading } />
      </div>
    );
  }

});

module.exports = EmbedList;