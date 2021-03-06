'use strict';

module.exports = (app) => {

  app.controller('UserController', ['$http', UserController]);


  function UserController($http){
    console.log('marker 1');
    const userRoute = 'https://api.github.com/users/lwenke01';
    this.user = [];
    this.owner = [];
    this.starRepo = [];
    this.starUrl = [];
    this.followers = {};


    this.getUser = function(){
      $http.get(userRoute)
        .then((result)=>{
          this.user = result.data;

        }, function (error){
          console.log(error);
        });
    };

    this.getStarred = function(){
      $http.get(userRoute + '/starred')
      .then((result)=>{
        this.owner = result.data.name;
        this.starRepo = result.data.length;
      });
    };
    this.getFollowers = function(){
      $http.get(userRoute + '/followers')
      .then((result)=>{
        console.log(result.data);
        this.followers = result.data;

      });
    };

  }

};
