(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('ProjectsController', function (ProjectsService) {
      var pc = this;

      ProjectsService.query(function (data) {
        pc.projects = data;
      });

    });

})();
