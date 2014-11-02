angular.module('demoApp').controller('KanbanController', ['$scope', "$collection", "$modal", function ($scope, $collection, $modal) {

  $collection(Columns, {}, {sort: ["index"]}).bind($scope, "columns");

  $scope.kanbanSortOptions = {

    //restrict move across columns. move only within column.
    /*accept: function (sourceItemHandleScope, destSortableScope) {
     return sourceItemHandleScope.itemScope.sortableScope.$id !== destSortableScope.$id;
     },*/
    itemMoved: function (event) {
      $scope.columns.save();
    },
    orderChanged: function (event) {
    },
    containment: '#board'
  };

  $scope.removeCard = function (column, $index) {
    column.cards.splice($index, 1);
    this.columns.save(column);
  }

  $scope.addNewCard = function (column) {
    var modalInstance = $modal.open({
      templateUrl: 'views/partials/newCard.html',
      controller: 'NewCardController',
      backdrop: 'static',
      resolve: {
        column: function () {
          return column;
        }
      }
    });
    modalInstance.result.then(function (cardDetails) {
      if (cardDetails) {
        column.cards.push(cardDetails);
        $scope.columns.save(column);
      }
    });
  }

}]);
