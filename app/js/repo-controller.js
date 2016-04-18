'use strict';
(function(){
angular.module('repo')
  .controller('UserController', ['$scope','http', function($scope, $http){
    console.log('marker1');

    const userRoute = 'https://api.github.com/users/lwenke01';
    this.user = ['user'];
    $scope.smokeTest = 'hello';

    this.getUser = function(){
      $http.get(userRoute)
      .then((result)=>{
        console.log(result.data);
        this.user = result.data;

      }, function (error){
        console.log(error);
      });
    };

  }]);

})();
