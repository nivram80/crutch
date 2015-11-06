(function() {
  'use strict';

  angular
    .module('crutch')
    .config(config);

  function config($logProvider) {
    $logProvider.debugEnabled(true);
  }

})();
