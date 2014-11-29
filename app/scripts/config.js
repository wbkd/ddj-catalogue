var origin = function(path){
  return window.isProduction ? location.origin + '/' + path : 'http://localhost:1337/' + path;
};

module.exports = {
	apiUrl: origin('api/v1/projects'),
  submitUrl : origin('submit'),
	imageUrl : origin('images/'),
	defaultImage : 'http://placehold.it/100x100',
	
  // lazyloading 
  itemCount : 50, // number of preview items you want to recieve when doing an api call

  // sorting
  sortType: 'date',
  isSortOrderDesc : true,

  // labels
  appName: 'Datenkatalog'
};