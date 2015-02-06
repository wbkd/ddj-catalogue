var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');
var EmbedList = require('../components/embed/embedList.jsx');

var PreviewActions = require('../actions/previewActions');
var EmbedStore = require('../stores/embedStore');

var Embed = React.createClass({

  getInitialState() {
    //var routeParams = RouteParamStore.getRouteParams();
    return {
      previews: [],
      isLoading: true
    };
  },

  onStatusChange(state) {
    console.log(state)
    this.setState(state);
  },

  componentWillMount() {
    if(!this.props.ids){
      return false;
    }
    
    this.unsubscribe = EmbedStore.listen(this.onStatusChange);
      
    if(this.props.ids.indexOf('__') !== -1){
      this.props.ids = this.props.ids.split('__');
    }else{
      this.props.ids = [this.props.ids];
    }
    
    PreviewActions.loadByIdList(this.props.ids);
  },

  render() {
    
    return ( 
      <div>
        <Header hasSubmenu = { false } isEmbedMode={ true } />
        <EmbedList { ...this.state } />
        <footer className="centered embed-footer">
    		Weitere Projekte finden Sie im <a href="http://katalog.datenjournalismus.net/">DDJ-Katalog</a>.
    	</footer>
      </div>
    );
  }
});

module.exports = Embed;