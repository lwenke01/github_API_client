'use strict';

module.exports = (app) => {

  app.controller('RepoController', ['$http', RepoController]);


  function RepoController($http){
    console.log('marker 2');
    const userRoute = 'https://api.github.com/users/lwenke01';
    const repoRoute = 'https://api.github.com/users/lwenke01/repos';
    const baseRepoRoute = 'https://api.github.com/repos/lwenke01/';

    this.repos = [];
    this.starRepo = [];
    this.starUrls = [];
    this.collaborator = [];


    this.getRepos = function(){
      $http.get(repoRoute)
      .then((result)=>{
        this.repos = result.data;
      }, function (error){
        console.log(error);
      });
    };

    this.getStarred = function(){
      $http.get(userRoute + '/' + 'starred')
      .then((result)=>{
        console.log('starred ' + result.data);
        this.starUrls = result.data;
        this.starRepo = result.data.length;
      });
    };
    this.getCollaborator = function(){
      $http.get(baseRepoRoute + '/' + this.repos.name + '/contributors')
      .then((result)=>{
        console.log(result.data);
        this.collaborator = result.data;
      });
    };

  }


};
