(function() {
'use strict';

angular
  .module('crutch')
  .constant('apiKey', 'Token token=35bb17265317e9d61a114203ec9a1d5b')
  .factory('Project', function($resource, apiKey) {

    function formatData(data) {
      return JSON.stringify({
        project: data
      });
    }

    return $resource("http://localhost:3010/api/v1/projects/:id", { id: "@id" },
      {
        'create':  { method: 'POST', transformRequest: formatData, headers: {'Authorization': apiKey} },
        'query':   { method: 'GET', isArray: true, headers: {'Authorization': apiKey} },
        'show':    { method: 'GET', isArray: false },
        'update':  { method: 'PUT' },
        'destroy': { method: 'DELETE' }
      }
    );

  });
})();
