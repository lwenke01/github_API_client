'use strict';

module.exports = (app) => {

  app.controller('FollowingController', ['$http', FollowingController]);


  function FollowingController($http){
    console.log('marker 1');
    const userRoute = 'https://api.github.com/users/lwenke01';
    this.followings = {};

    this.getFollowing = function(){
      $http.get(userRoute + '/' + 'following')
      .then((result)=>{
        console.log(result.data);
        this.followings = result.data;

      });
    };

  }

};
