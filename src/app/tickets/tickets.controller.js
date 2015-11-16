(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('TicketsController', ['Ticket', 'projectTickets', 'State', 'errorService', function (Ticket, projectTickets, State, errorService) {
      var tc = this;
      tc.errors = [];
      tc.ticket = new Ticket();
      tc.projectId = projectTickets.getTicketProjectId();
      tc.tickets = Ticket.query();
      tc.states = State.query();

      tc.delete = function(ticket) {
        var confirmed = confirm('Are you sure you want to delete?');
        if (confirmed) {
          $.when(Ticket.delete(ticket)).then(
            function () {
              _.remove(tc.tickets, ticket);
            },
            function (error) {
              tc.errors = errorService.parseErrors(error);
            }
          );
        }
      };

    }]);

})();
