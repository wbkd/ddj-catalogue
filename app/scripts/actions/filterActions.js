var Reflux = require('reflux');

var filterActions = Reflux.createActions([
  'filterSelect',
  'filterUnselect',
  'getFilters'
]);

module.exports = filterActions;