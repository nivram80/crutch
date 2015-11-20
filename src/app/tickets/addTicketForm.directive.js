(function() {
  'use strict';

  angular
    .module('crutch')
    .directive('addTicketForm', addTicketForm);

  function addTicketForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/tickets/views/addTicketForm.html',
      controller: addTicketController,
      controllerAs: 'addTicketCtrl',
      bindToController: true
    };

    return directive;

    function addTicketController(Ticket, errorService, $scope) {
      var atc = this;
      atc.ticket = new Ticket();
      atc.errors = [];

      atc.addTicket = function() {
        atc.ticket.project_id = parseInt($scope.ticketsCtrl.projectId);
        atc.ticket.state_id = parseInt($scope.state.id);
        atc.ticket.previous_state_id = parseInt($scope.state.id);

        $.when(atc.ticket.$create().then(
          function() {
            $scope.ticketsCtrl.tickets.push(atc.ticket);
            atc.resetAddForm();
            Ticket.query();
          },
          function(error) {
            atc.errors = errorService.parseErrors(error);
          }
        ));
      };

      atc.resetAddForm = function() {
        $scope.newTicketForm.$setPristine();
        $scope.newTicketForm.$setUntouched();
        $scope.showAddTicketForm = false;
        atc.errors = [];
        atc.ticket = new Ticket();
      };

    }
  }

})();
