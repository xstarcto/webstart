app.controller('hideCtrl', function($scope) {
    $scope.firstname = "M"
    $scope.lastname = "X"
    $scope.varname = false;
    $scope.fullname = $scope.firstname + $scope.lastname;

    $scope.toggle = function() {
        $scope.varname = !$scope.varname;
    };

    $scope.names = [
        {Name:'JS', Country:'China'},
        {Name:'CSS', Country:'OO'},
        {Name:'HTML', Country:'American'},
    ];

    $scope.order = $scope.selectedItem2=='ASC'?true:false;
    $scope.orderClause = "'Country':"+$scope.order;
});