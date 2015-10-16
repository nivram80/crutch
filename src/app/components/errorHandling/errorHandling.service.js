(function() {
  'use strict';

  angular
    .module('crutch')
    .factory('errorHandling', function() {

      return {
        parseErrors: function(error){
          var errorMessages = [];
          angular.forEach(error.data, function(value, key) {
            errorMessages.push(value[0])
          });
          return errorMessages;
        }
      }

    });

})();
