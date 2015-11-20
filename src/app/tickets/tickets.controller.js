(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('TicketsController', ['Ticket', 'State', '$stateParams', 'errorService', '$scope', function (Ticket, State, $stateParams, errorService, $scope) {
      var tc = this;
      tc.errors = [];
      tc.ticket = new Ticket();
      tc.projectId = $stateParams.id;
      tc.tickets = Ticket.query();
      tc.states = State.query();

      //tc.delete = function(ticket) {
      //  var confirmed = confirm('Are you sure you want to delete?');
      //  if (confirmed) {
      //    $.when(Ticket.delete(ticket)).then(
      //      function () {
      //        _.remove(tc.tickets, ticket);
      //      },
      //      function (error) {
      //        tc.errors = errorService.parseErrors(error);
      //      }
      //    );
      //  }
      //};

      $scope.onStartCallback = function(event, ui, ticket) {
        tc.draggedTicket = ticket.ticket;
        tc.draggedTicket.previous_state_id = ticket.ticket.state_id;
      };

      $scope.moveTicket = function(event, ui, state) {
        tc.draggedTicket.state_id = state.state.id;

        $.when(tc.draggedTicket.$update(tc.draggedTicket).then(
          function() {
            tc.tickets = Ticket.query();
          },
          function(error) {
            tc.errors = errorService.parseErrors(error);
          }
        ));
      };

    }]);

})();
