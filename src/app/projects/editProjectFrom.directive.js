(function() {
  'use strict';

  angular
    .module('crutch')
    .directive('editProjectForm', editProjectForm);

    function editProjectForm() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/projects/views/editProjectForm.html',
        controller: editProjectController,
        controllerAs: 'editProjectCtrl',
        bindToController: true
      };

      return directive;

      function editProjectController(Project, errorService, $scope) {
        var pc = this;
        pc.project = new Project();
        pc.errors = [];

        pc.copyProject = function(project) {
          pc.projectCopy = angular.copy(project);
        };

        pc.update = function(project, editProjectForm) {
          $.when(pc.project.$update(project).then(
            function() {
              pc.resetEditForm(editProjectForm);
            },
            function(error) {
              pc.errors = errorService.parseErrors(error);
            }
          ));
        };

        pc.resetEditForm = function(editProjectForm, project) {
          editProjectForm.$setPristine();
          editProjectForm.$setUntouched();
          editProjectForm.showEditProjectForm = false;

          if (project) {
            $scope.project = pc.projectCopy;
          }

          pc.errors = [];
          pc.project = new Project();
        };
      }
    }

})();
