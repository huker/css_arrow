/**
 * Created by hu on 2015/11/8.
 */

var app=angular.module('myApp',[]);
app.controller('posCtrl',function($scope){
    $scope.isLeft=false;$scope.isTop=false;$scope.isRight=false;$scope.isBottom=false;
    $scope.posLeft= function () {
        $scope.isLeft=true;
        $scope.isTop=false;$scope.isRight=false;$scope.isBottom=false;
    }
    $scope.posTop=function(){
        $scope.isLeft=false;$scope.isTop=true;$scope.isRight=false;$scope.isBottom=false;
    }
    $scope.posRight=function(){
        $scope.isLeft=false;$scope.isTop=false;$scope.isRight=true;$scope.isBottom=false;
    }
    $scope.posBottom=function(){
        $scope.isLeft=false;$scope.isTop=false;$scope.isRight=false;$scope.isBottom=true;
    }
})
