var React = require('react');
var Home = require('./pages/home.jsx');
var ErrorPage = require('./pages/404.jsx');

module.exports.routes = {
  '/projekte' : function(){
    React.render(<Home />, document.body);
  }
}

module.exports.config = {
  'notfound' : function(){
    React.render(<ErrorPage />, document.body);
  }
}