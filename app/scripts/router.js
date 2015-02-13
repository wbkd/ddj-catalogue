// workaround from:
// https://github.com/rackt/react-router/blob/master/docs/guides/flux.md

var router;

module.exports = {
  getCurrentPath() {
    return router.getQuery();
  },

  makePath(to, params, query) {
    return router.makePath(to, params, query);
  },

  makeHref(to, params, query) {
    return router.makeHref(to, params, query);
  },

  transitionTo(to, params, query) {
    router.transitionTo(to, params, query);
  },

  replaceWith(to, params, query) {
    router.replaceWith(to, params, query);
  },

  run(render) {
    router.run(render);
  }
};

var routes = require('./routes');
var Router = require('react-router');

router = Router.create({
  routes: routes
});
