(function() {
  'use strict';

  angular
    .module('crutch')
    .directive('mainNav', mainNav);

  /** @ngInject */
  function mainNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/mainNav/mainNav.html',
      scope: {
          creationDate: '='
      },
      controller: MainNavController,
      controllerAs: 'mainNav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MainNavController() {

    }
  }

})();
