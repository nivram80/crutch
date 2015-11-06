(function() {
  'use strict';

  angular
    .module('crutch')
    .factory('errorService', function() {

      return {
        parseErrors: function(error){
          var errorMessages = [];
          angular.forEach(error.data, function(value) {
            errorMessages.push(value[0]);
          });
          return errorMessages;
        }
      };

    });

})();
