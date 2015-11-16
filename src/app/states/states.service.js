(function() {
  'use strict';

  angular
    .module('crutch')
    .factory('State', function($resource, apiKey, baseUrl) {

      return $resource(baseUrl + "/states/:id",
        { id: "@id" },
        {
          'create':  { method: 'POST', headers: {'Authorization': apiKey} },
          'query':   { method: 'GET', isArray: true, headers: {'Authorization': apiKey} },
          'show':    { method: 'GET', isArray: false },
          'update':  { method: 'PUT', headers: {'Authorization': apiKey} },
          'delete':  { method: 'DELETE', headers: {'Authorization': apiKey} }
        }
      );

    });

})();
