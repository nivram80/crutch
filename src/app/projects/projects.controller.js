(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('ProjectsController', ['Project', 'errorService', '$scope', function (Project, errorService, $scope) {
      var pc = this;
      pc.project = new Project();
      pc.editProjectForm = {};
      pc.showAddProjectForm = false;
      pc.errors = [];

      Project.query(function(data) {
        pc.projects = data;
      });

      pc.addProject = function() {
        $.when(pc.project.$create().then(
          function() {
            pc.projects.push(pc.project);
            pc.resetAddForm();
          },
          function(error) {
            pc.errors = errorService.parseErrors(error);
          }
        ));
      };

      pc.update = function(project) {
        $.when(pc.project.$update(project).then(
          function() {
            pc.resetEditForm(project);
          },
          function(error) {
            pc.errors = errorService.parseErrors(error);
          }
        ));
      };

      pc.delete = function(project) {
        var confirmed = confirm('Are you sure you want to delete?');
        if (confirmed) {
          $.when(Project.delete(project)).then(
            function () {
              _.remove(pc.projects, project);
            },
            function (error) {
              pc.errors = errorService.parseErrors(error);
            }
          );
        }
      };

      pc.copyProject = function(project) {
        pc.projectCopy = angular.copy(project);
      };

      pc.cancelEdit = function(project) {
        pc.resetEditForm(project, true);
      };

      pc.resetEditForm = function(project, cancel) {
        project.editProjectForm.$setPristine();
        project.editProjectForm.$setUntouched();
        project.showEditProjectForm = false;

        if (cancel) {
          $scope.project = pc.projectCopy;
        }

        pc.errors = [];
        pc.project = new Project();
      };

      pc.resetAddForm = function() {
        $scope.newProjectForm.$setPristine();
        $scope.newProjectForm.$setUntouched();
        $scope.showAddProjectForm = false;
        pc.errors = [];
        pc.project = new Project();
      };

    }]);

})();
