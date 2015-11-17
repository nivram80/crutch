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
      var pc = this;
      pc.ticket = new Ticket();
      pc.errors = [];

      pc.addTicket = function() {
        pc.ticket.project_id = parseInt($scope.ticketsCtrl.projectId);
        pc.ticket.state_id = parseInt($scope.state.id);
        $.when(pc.ticket.$create().then(
          function() {
            $scope.ticketsCtrl.tickets.push(pc.ticket);
            pc.resetAddForm();
          },
          function(error) {
            pc.errors = errorService.parseErrors(error);
          }
        ));
      };

      pc.resetAddForm = function() {
        $scope.newTicketForm.$setPristine();
        $scope.newTicketForm.$setUntouched();
        $scope.showAddTicketForm = false;
        pc.errors = [];
        pc.ticket = new Ticket();
      };

    }
  }

})();
