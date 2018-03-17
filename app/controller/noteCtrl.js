app.controller('noteCtrl', function($scope) {
    $scope.text = "";
    $scope.leftCount = 100;


    $scope.clean = function() {
        $scope.text = "";
    }

});