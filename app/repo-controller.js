'use strict';

module.exports = (app) => {

  app.controller('RepoController', ['$http', RepoController]);


  function RepoController($http){
    console.log('marker 2');
    const repoRoute = 'https://api.github.com/users/lwenke01/repos';
    this.repos = [];
    // this.starRepo = [];
    // this.starRepo = [];
    // this.starUrl = [];


    this.getRepos = function(){
      $http.get(repoRoute)
        .then((result)=>{
          console.log(result);
          this.repos = result.data;

        }, function (error){
          console.log(error);
        });
    };

    // this.getStarred = function(){
    //   $http.get(userRoute + '/starred')
    //   .then((result)=>{
    //     console.log(result.data);
    //     this.owner = result.data;
    //     this.starRepo = result.data.length
    //   });
    // };

  }

};
