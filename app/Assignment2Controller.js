


angular.module('app').controller('Assignment2Controller', function($scope) {
 $scope.fact=1;
  $scope.zero=1;
   $scope.neg=-1;
    $scope.doSquare = function() {
      //  $scope.answer = CalculatorService.square($scope.number)
         $scope.answer = $scope.number * $scope.number ;
    }

    $scope.doCube = function() {
        $scope.answer = $scope.number * $scope.number * $scope.number ;
    }

     $scope.doFact = function() {


        if ($scope.number < 0) {
        $scope.answer= $scope.neg;
    }
     else if ($scope.number == 0) {
        $scope.answer= $scope.zero;
    }
    
    else{
         for($scope.i = 1; $scope.i<= $scope.number ; $scope.i++)
        {
            $scope.fact = $scope.fact * $scope.i;              // factorial = factorial*i;
        }
        $scope.answer= $scope.fact;

    }


    }


});