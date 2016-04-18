'use strict';

const angular = require('angular');
const app = angular.module('GitApp', []);

require('./user-controller.js')(app);
require('./repo-controller.js')(app);
