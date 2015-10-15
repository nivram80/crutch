(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('ProjectsController', ['Project', '$scope', function (Project, $scope) {
      var pc = this;
      pc.project = new Project();
      pc.showAddProjectForm = false;
      pc.errors = [];

      Project.query(function(data) {
        pc.projects = data;
      });

      pc.create = function() {
        $.when(pc.project.$create(function() {
            pc.projects.push(pc.project);
            pc.resetForm();
          },
          function(error) {
            var errorMessages = [];
            angular.forEach(error.data, function(value, key) {
              errorMessages.push(value[0])
            });
            pc.errors = errorMessages;
          }
        ));

      };

      pc.delete = function(project) {
        $.when(Project.delete(project)).then(
          function() {
            _.remove(pc.projects, project);
          },
          function(error){
            pc.errors = error.data;
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
