'use strict';

const angular = require('angular');
const app = angular.module('GitApp', []);

require('./arcade-controller.js')(app);
require('./games-controller.js')(app);
