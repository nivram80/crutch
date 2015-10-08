(function() {
'use strict';

angular
  .module('crutch')
  .factory('ProjectsService', function($resource) {

    return $resource("http://localhost:3010/api/v1/projects/:id", { id: "@id" },
      {
        'create':  { method: 'POST' },
        'query':   { method: 'GET', isArray: true, headers: {'Authorization': 'Token token=35bb17265317e9d61a114203ec9a1d5b'} },
        'show':    { method: 'GET', isArray: false },
        'update':  { method: 'PUT' },
        'destroy': { method: 'DELETE' }
      }
    );

  });
})();
