(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('ProjectsController', ['Project', '$scope', function (Project, $scope) {
      var pc = this;
      pc.project = new Project();
      pc.showAddProjectForm = false;

      Project.query(function(data) {
        pc.projects = data;
      });

      $scope.save = function() {
        $.when(pc.project.$create()).then(
          function() {
            pc.projects.push(pc.project);
            pc.project = new Project();
          },
          function(error) {
            alert(error)
          }
        );

      };

      $scope.delete = function(project) {
        $.when(Project.delete(project)).then(
          function() {
            _.remove(pc.projects, project);
          },
          function(error){
            alert(error);
          }
        );

      };
    }]);

})();
