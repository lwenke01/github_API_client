'use strict';
// const angular = require('angular');

(function(){
  var app = angular.module('user', []);
  app.controller('UserController', ['http', function( $http){
    console.log('marker1');

    const userRoute = 'https://api.github.com/users/lwenke01';
    this.user = ['user'];
    this.smokeTest = 'hello';

    this.getUser = function(){
      $http.get(userRoute)
      .then((result)=>{
        console.log(result);
        this.user = result.data;

      }, function (error){
        console.log(error);
      });
    };

  }]);

})();
