var React = require('react');
var config = require('../config');

// components
var Preview = require('./preview.jsx');
var Sorter = require('./sorter.jsx');
var SelectedFilters = require('./selectedFilters.jsx');

// actions
var FilterActions = require('../actions/filterActions');
var PreviewActions = require('../actions/previewActions');

// stores
var PreviewStore = require('../stores/previewStore');
var FilterStore = require('../stores/filterStore');

var PreviewList = React.createClass({

  getInitialState: function(a){
    return {
      previews : [],
      expandedId : null,
      sortType : config.sortType,
      isSortOrderDesc : config.isSortOrderDesc
    };
  },

  onStatusChange: function(newState){
    newState.expandedId = this.state.expandedId === newState.expandedId ? null : newState.expandedId;
    this.setState(newState);
  },

  componentDidMount: function() {

    this.unsubscribePreviewStore = PreviewStore.listen(this.onStatusChange);
    this.unsubscribeFilterStore = FilterStore.listen(this.onStatusChange);
    // used to only track scroll down
    this.lastScrollTop = 0;
    // index for lazyloading requests
    this.lazyIndex = 0;

    //TODO:  How to use react onScroll Event in this case?
    window.addEventListener('scroll', this.handleScroll, false);

    PreviewActions.load(this.lazyIndex);
  },

  componentWillUnmount: function(){
    this.unsubscribePreviewStore();
    this.unsubscribeFilterStore();
    window.removeEventListener('scroll', this.handleScroll, false);
  },

  toggleFilterMenu: function(){
    FilterActions.toggleFilterMenu();
  },

  handleScroll: function(){

    var documentHeight = document.body.scrollHeight,
      windowHeight = window.innerHeight,
      scrollTop = window.scrollY;

    // user scrolls down
    if (scrollTop > this.lastScrollTop) {
      // user reaches end of screen
      if(scrollTop + windowHeight >= documentHeight){
        
        //TODO: lazy load previews 
        console.log('load more previews')
      }
    }
     
    this.lastScrollTop = scrollTop;


  },

  render: function() {

    var previews = this.state.previews.map(function(preview,i) {
      var isExpanded = this.state.expandedId ? this.state.expandedId === preview._id : false,
        isStared = this.props.favoriteIds.indexOf(preview._id) !== -1;
      return (<Preview data={preview} isStared={isStared} isExpanded={isExpanded} key={preview._id} />);
    }.bind(this));

    return (
      <div className="preview-list row centered">
        <div className="clearfix preview-list-header">
          <div onClick={this.toggleFilterMenu} className="btn btn-filter btn"><i className="icon_menu"></i> Liste filtern</div>
          <Sorter isSortOrderDesc={this.state.isSortOrderDesc} sortType={this.state.sortType} />
        </div>
        <div className="selected-filters clearfix">
         <SelectedFilters filters={this.state.selectedFilters} />
        </div>
        <div className="preview-list-content row">
          {previews}
        </div>
      </div>
    );
  }
});

module.exports = PreviewList;