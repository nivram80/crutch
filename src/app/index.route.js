(function() {
  'use strict';

  angular
    .module('crutch')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projects'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
