var React = require('react');

var Home = require('./pages/home.jsx');
var ErrorPage = require('./pages/404.jsx');
var Router = require('./router.js');

new Router().route({
  '/projekte' : <Home />
}).config({
  'notfound' : <ErrorPage />
}).init('/projekte');