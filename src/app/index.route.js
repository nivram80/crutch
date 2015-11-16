(function() {
  'use strict';

  angular
    .module('crutch')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('projects', {
        url: '/',
        templateUrl: 'app/projects/views/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projectsCtrl'
      })
      .state('tickets', {
        url: '/project/:id/tickets',
        templateUrl: 'app/tickets/views/tickets.html',
        controller: 'TicketsController',
        controllerAs: 'ticketsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
