(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('ProjectsController', ['Project', 'errorService', '$scope', function (Project, errorService, $scope) {
      var pc = this;
      pc.project = new Project();
      pc.showAddProjectForm = false;
      pc.errors = [];

      Project.query(function(data) {
        pc.projects = data;
      });

      pc.create = function() {
        $.when(pc.project.$create().then(
          function() {
            pc.projects.push(pc.project);
            pc.resetForm();
          },
          function(error) {
            pc.errors = errorService.parseErrors(error);
          }
        ));
      };

      pc.delete = function(project) {
        $.when(Project.delete(project)).then(
          function() {
            _.remove(pc.projects, project);
          },
          function(error){
            pc.errors = errorService.parseErrors(error);
          }
        );
      };

      pc.resetForm = function() {
        $scope.newProjectForm.$setPristine();
        $scope.newProjectForm.$setUntouched();
        $scope.showAddProjectForm = false;
        pc.errors = [];
        pc.project = new Project();
      };

    }]);

})();
