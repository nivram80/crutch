(function() {
  'use strict';

  angular
    .module('crutch')
    .run(runBlock);

  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
