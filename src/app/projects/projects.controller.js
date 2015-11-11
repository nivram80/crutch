(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('ProjectsController', ['Project', 'errorService', '$scope', function (Project, errorService, $scope) {
      var pc = this;
      pc.project = new Project();
      pc.errors = [];

      Project.query(function(data) {
        pc.projects = data;
      });

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

    }]);

})();
