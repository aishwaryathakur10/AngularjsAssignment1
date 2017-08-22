angular.module('app').controller('Assignment5Controller', function($scope) {
 $scope.fuser = 'Aishwarya';
	$scope.luser = 'Thakur';
    $scope.email = 'aishwaryathakur@gmail.com';


$scope.userArray = [];
    console.log($scope.userArray);
    $scope.submitForm = function(){
       
            $scope.userArray.push($scope.fuser);
            $scope.userArray.push($scope.luser);
             $scope.userArray.push($scope.email);
            $scope.userArray.push($scope.mobile_number);
             $scope.userArray.push($scope.gender);
              $scope.userArray.push($scope.city);
      
        console.log($scope.userArray);
    };   
  $scope.reset = function(){
       
             $scope.fuser="";
              $scope.luser="";
               $scope.email="";
                $scope.mobile_number="";
                 $scope.city="";
                 $scope.gender="";

           $scope.userArray.pop($scope.fuser);
            $scope.userArray.pop($scope.luser);
             $scope.userArray.pop($scope.email);
            $scope.userArray.pop($scope.mobile_number);
             $scope.userArray.pop($scope.gender);
              $scope.userArray.pop($scope.city);
      
        console.log($scope.userArray);
    };   

});