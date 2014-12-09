var baseUrl = function(path){
  return window.isProduction ? location.origin + '/' + path : 'http://localhost:1337/' + path;
};

module.exports = {
	apiUrl: baseUrl('api/v1/projects'),
  submitUrl : baseUrl('submit'),
	imageUrl : baseUrl('images/'),
	defaultImage : 'http://apps.moritzklack.com/katalog/notfound.png',
	
  // lazyloading 
  itemCount : 50, // number of preview items you want to recieve when doing an api call

  // sorting
  sortType: 'date',
  isSortOrderDesc : true,

  // labels
  appName: 'DDJ Katalog',
  baseUrl : baseUrl,

  //sharing
  sharingText: 'Der Datenjournalismus Katalog: 200 Werke aus dem deutschsprachigen Raum!',
  sharingUrl: 'http://katalog.datenjournalismus.net',
  hashtags: 'ddj' //comma seperated
};