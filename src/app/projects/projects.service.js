(function() {
'use strict';

angular
  .module('crutch')
  .factory('Project', function($resource, apiKey, baseUrl) {

    return $resource(baseUrl + "/projects/:id",
      { id: "@id" },
      {
        'create':  { method: 'POST', headers: {'Authorization': apiKey} },
        'query':   { method: 'GET', isArray: true, headers: {'Authorization': apiKey} },
        'show':    { method: 'GET', isArray: false, headers: {'Authorization': apiKey} },
        'update':  { method: 'PUT', headers: {'Authorization': apiKey} },
        'delete':  { method: 'DELETE', headers: {'Authorization': apiKey} }
      }
    );

  });

})();
