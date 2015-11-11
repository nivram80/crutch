(function() {
  'use strict';

  angular
    .module('crutch')
    .directive('addProjectForm', addProjectForm);

  function addProjectForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/projects/views/addProjectForm.html',
      controller: addProjectController,
      controllerAs: 'addProjectCtrl',
      bindToController: true
    };

    return directive;

    function addProjectController(Project, errorService, $scope) {
      var pc = this;
      pc.project = new Project();
      pc.errors = [];

      pc.addProject = function() {
        $.when(pc.project.$create().then(
          function() {
            $scope.projectsCtrl.projects.push(pc.project);
            pc.resetAddForm();
          },
          function(error) {
            pc.errors = errorService.parseErrors(error);
          }
        ));
      };

      pc.resetAddForm = function() {
        $scope.newProjectForm.$setPristine();
        $scope.newProjectForm.$setUntouched();
        $scope.showAddProjectForm = false;
        pc.errors = [];
        pc.project = new Project();
      };

    }
  }

})();
