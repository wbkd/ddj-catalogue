var React = require('react');
var config = require('../config');
var utils = require('../utils');

// components
var Preview = require('./preview.jsx');
var Sorter = require('./sorter.jsx');
var SelectedFilters = require('./selectedFilters.jsx');
var LoadingSpinner = require('./loadingSpinner.jsx');

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
      isSortOrderDesc : config.isSortOrderDesc,
      selectedFilters : {},
      isLoading: true,
      count : 0
    };
  },

  onStatusChange: function(newState){
    newState.expandedId = this.state.expandedId === newState.expandedId ? null : newState.expandedId;
    
    var newPreviews = this.state.previews;

    // we need to clear the preview list
    // we use this when we sort or filter 
    if(!utils.isUndefined(newState.reset)){
      newState.previews = [];
      this.resetLazyParams();
      this.setState(newState, function(){
        this.loadPreviews();
      }.bind(this));

      return false;
      
    }
    else if(!utils.isUndefined(newState.previews)){
      newPreviews = newPreviews.concat(newState.previews);
      newState.previews = newPreviews;
    }

    this.setState(newState);
  },

  componentDidMount: function() {

    this.unsubscribePreviewStore = PreviewStore.listen(this.onStatusChange);
    this.unsubscribeFilterStore = FilterStore.listen(this.onStatusChange);
    this.resetLazyParams();

    //TODO:  How to use react onScroll Event in this case?
    window.addEventListener('scroll', this.handleScroll, false);

    this.loadPreviews();
  },

  componentWillUnmount: function(){
    this.unsubscribePreviewStore();
    this.unsubscribeFilterStore();
    window.removeEventListener('scroll', this.handleScroll, false);
  },

  resetLazyParams: function(){
    // used to only track scroll down
    this.lastScrollTop = 0;
    // index for lazyloading requests
    this.lazyIndex = 0;
  },

  toggleFilterMenu: function(){
    FilterActions.toggleFilterMenu();
  },

  loadPreviews: function(){
    // don't try to load more previews if everything is loaded
    var previewCount =  this.state.previews.length
    if(previewCount !== 0 && previewCount === this.state.count){
      return false;
    }
    PreviewActions.load({sortType : this.state.sortType, isSortOrderDesc: this.state.isSortOrderDesc, lazyIndex : this.lazyIndex, filters : this.state.selectedFilters});
  },

  handleScroll: function(){

    var documentHeight = document.body.scrollHeight,
      windowHeight = window.innerHeight,
      scrollTop = window.scrollY;

    // user scrolls down
    if (scrollTop > this.lastScrollTop) {
      // user reaches end of screen
      if(scrollTop + windowHeight >= documentHeight){
        
        this.lazyIndex++;
        this.loadPreviews();
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
          <div className="clearfix preview-list-left">
            <div onClick={this.toggleFilterMenu} className="btn btn-filter btn"><i className="icon_menu"></i> Liste filtern</div>
            <div className="light count">{this.state.count} Projekte gefunden</div>
          </div>
          <Sorter isSortOrderDesc={this.state.isSortOrderDesc} sortType={this.state.sortType} />
        </div>
        <div className="selected-filters clearfix">
         <SelectedFilters filters={this.state.selectedFilters} />
        </div>
        <div className="preview-list-content row">
          {previews}
        </div>
        <LoadingSpinner isActive={this.state.isLoading} />
      </div>
    );
  }
});

module.exports = PreviewList;