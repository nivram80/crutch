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
        pc.project.$create();
        pc.projects.push(pc.project);
        pc.project = new Project();
      };
    }]);

})();
