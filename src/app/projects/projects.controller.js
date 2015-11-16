(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('ProjectsController', ['Project', 'Ticket', 'errorService', '$location', function (Project, Ticket, errorService, $location) {
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

      pc.titleClick = function(project) {
        $location.path('/project/' + project.id + '/tickets');
      };

    }]);

})();
