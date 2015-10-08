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
    function MainNavController(moment) {
      var vm = this;

      // "vm.creation" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
