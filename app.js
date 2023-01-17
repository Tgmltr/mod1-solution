(function(){
    'use strict';
    angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject =['$scope'];
    function LunchCheckController ($scope){
        $scope.text = "";
        $scope.color ="black";
        $scope.Text = "";
        $scope.check=function(){
            var count = 0;
            var newtext= $scope.text.trim();
            for (var i=0;i<newtext.length;i++){
                if(newtext[i]===','){count++};
            }
            if(count<=2 && newtext.length>0){$scope.Text = "Enjoy!"; $scope.color ="green";}
            else if(count>2){$scope.Text = "Too much!"; $scope.color ="red";}
            else{$scope.Text = "";}
        }
    }

})();