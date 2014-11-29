var baseUrl = function(path){
  return window.isProduction ? location.origin + '/' + path : 'http://localhost:1337/' + path;
};

module.exports = {
	apiUrl: baseUrl('api/v1/projects'),
  submitUrl : baseUrl('submit'),
	imageUrl : baseUrl('images/'),
	defaultImage : 'http://placehold.it/100x100',
	
  // lazyloading 
  itemCount : 50, // number of preview items you want to recieve when doing an api call

  // sorting
  sortType: 'date',
  isSortOrderDesc : true,

  // labels
  appName: 'Datenkatalog',
  baseUrl : baseUrl
};