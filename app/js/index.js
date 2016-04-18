const angular = require('angular');
require('./user-controller.js');
// require('./repo-controller.js');

(function() {
  angular.module('GitApp', [
    'user',
    'repo'
  ]);
})();
