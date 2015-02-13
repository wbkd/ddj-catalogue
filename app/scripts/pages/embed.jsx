var React = require('react');
var Header = require('../components/general/header.jsx');
var Footer = require('../components/general/footer.jsx');
var EmbedList = require('../components/embed/embedList.jsx');
var EmbedFooter = require('../components/embed/embedFooter.jsx');

var PreviewActions = require('../actions/previewActions');
var EmbedStore = require('../stores/embedStore');

var Router = require('react-router');

var i18n = require('../i18n/de').embed;

var Embed = React.createClass({
  mixins: [Router.State],
  
  getInitialState() {
    return {
      previews: [],
      isLoading: true
    };
  },

  onStatusChange(state) {
    this.setState(state);
  },

  componentWillMount() {
    
    var ids = this.getParams().ids;
    
    if(!ids){
      return false;
    }
    
    this.unsubscribe = EmbedStore.listen(this.onStatusChange);
    
    if(ids.indexOf('__') !== -1){
      ids = ids.split('__');
    }else{
      ids = [ids];
    }
    
    PreviewActions.loadByIdList(ids);
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