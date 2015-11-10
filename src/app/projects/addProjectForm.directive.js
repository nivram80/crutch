(function() {
  'use strict';

  angular
    .module('crutch')
    .directive('addProjectForm', addProjectForm);

  function addProjectForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/projects/views/addProjectForm.html',
      controller: 'ProjectsController',
      controllerAs: 'projects',
      bindToController: true
    };

    return directive;

    //function MainNavController() {
    //
    //}
  }

})();
