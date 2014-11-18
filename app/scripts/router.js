var React = require('react');

class Router {

  constructor() {
    this._routes = {}
    this._config = {}
    this.React = require('react')
    this.director = require('director')
  }

  init(initPath){
      new this.director
      .Router(this._routes)
      .configure(this._config)
      .init(initPath);

      return this;
  }

  route(_){
 
    for(var key in _){
      var element = _[key];  
      this._routes[key] = function(){
         this.React.render(element, document.body);
      }.bind(this)
    }

    return this;
  }

  config(_){

    for(var key in _){
      var element = _[key]; 

      this._config[key] = function(){
         this.React.render(element, document.body);
      }.bind(this)
    }

    return this;
  } 
}

module.exports = Router;