(function() {
  'use strict';

  angular
    .module('crutch')
    .factory('Ticket', function($resource, apiKey, baseUrl) {

      return $resource(baseUrl + "/tickets/:id",
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
