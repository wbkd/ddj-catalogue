var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');
var EmbedList = require('../components/embed/embedList.jsx');
var EmbedFooter = require('../components/embed/embedFooter.jsx');

var PreviewActions = require('../actions/previewActions');
var EmbedStore = require('../stores/embedStore');

var i18n = require('../i18n/de').embed;

var Embed = React.createClass({

  getInitialState() {
    //var routeParams = RouteParamStore.getRouteParams();
    return {
      previews: [],
      isLoading: true
    };
  },

  onStatusChange(state) {
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
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
  },

  componentDidMount() {
    this.getDOMNode().style.minHeight = window.innerHeight + 'px';
  },

  render() {
    
    return ( 
      <div className="embed-wrapper">
        <EmbedList { ...this.state } />
        <EmbedFooter />
      </div>
    );
  }
});

module.exports = Embed;