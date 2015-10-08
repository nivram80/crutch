(function() {
  'use strict';

  angular
    .module('crutch')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
