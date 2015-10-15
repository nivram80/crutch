(function() {
'use strict';

angular
  .module('crutch')
  .factory('Project', function($resource, apiKey, baseUrl) {

    function formatData(data) {
      return JSON.stringify({
        project: data
      });
    }

    return $resource(baseUrl + "/projects/:id",
      { id: "@id" },
      {
        'create':  {
          method: 'POST',
          transformRequest: formatData,
          headers: {'Authorization': apiKey}
        },
        'query':   { method: 'GET', isArray: true, headers: {'Authorization': apiKey} },
        'show':    { method: 'GET', isArray: false },
        'update':  { method: 'PUT' },
        'delete':  { method: 'DELETE', headers: {'Authorization': apiKey} }
      }
    );

  });

})();
