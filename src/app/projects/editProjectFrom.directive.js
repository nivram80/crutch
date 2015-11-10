(function() {
  'use strict';

  angular
    .module('crutch')
    .directive('editProjectForm', editProjectForm);

  function editProjectForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/projects/views/editProjectForm.html',
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
