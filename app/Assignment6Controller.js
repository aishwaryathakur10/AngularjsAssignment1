
    angular.module("app").controller("Assignment6Controller",function($scope){
        $scope.total = 0;
        $scope.names=[{name:"Pizza",price:150},{name:"Burger",price:70},{name:"Fries",price:50}];
        $scope.selectedItems=[];    
        $scope.value=function(isSelected,item){
            if(isSelected==true){
                $scope.selectedItems.push(item);
                $scope.total += item.price;
            }
            else {
                $scope.total -= item.price;
                console.log(item.name);
                angular.forEach($scope.selectedItems, function(itemRmv,$index){
                    if(itemRmv.name==item.name)  {
                        $scope.selectedItems.splice($index,1);
                    }
                 })
            }
        } 
    });

