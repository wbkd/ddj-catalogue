module.exports = {
	apiUrl: 'http://localhost:1337/api/v1/projects',
  submitUrl : 'http://localhost:1337/submit',
	imageUrl : 'http://localhost:1337/images/',
	defaultImage : 'http://placehold.it/100x100',
	
  // lazyloading 
  itemCount : 50, // number of preview items you want to recieve when doing an api call

  // sorting
  sortType: 'date',
  isSortOrderDesc : true,

  // labels
  appName: 'Datenkatalog'
};