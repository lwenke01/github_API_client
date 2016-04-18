'use strict';

module.exports = (app) => {

  app.controller('FollowerController', ['$http', FollowerController]);


  function FollowerController($http){
    console.log('marker 1');
    const userRoute = 'https://api.github.com/users/lwenke01';
    this.followers = {};

    this.getFollowers = function(){
      $http.get(userRoute + '/' + 'followers')
      .then((result)=>{
        console.log(result.data);
        this.followers = result.data;

      });
    };

  }

};
