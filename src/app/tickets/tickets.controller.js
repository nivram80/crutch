(function() {
  'use strict';

  angular
    .module('crutch')
    .controller('TicketsController', ['Ticket', 'State', '$stateParams', 'errorService', function (Ticket, State, $stateParams, errorService) {
      var tc = this;
      tc.errors = [];
      tc.ticket = new Ticket();
      tc.projectId = $stateParams.id;
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
