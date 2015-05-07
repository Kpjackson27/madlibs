'use strict';

angular.module('madLibs',[])
	.controller('MainCtrl',function ($scope){
		
		$scope.hideText = true;
		$scope.showText = function(){
			return $scope.hideText = false;
		};

		$scope.reset = function (){

			if(!$scope.hideText){
				$scope.malename = '';
				$scope.jtitle = '';
				$scope.task1 = '';
				$scope.task2 = '';
				$scope.celebrity = '';
				$scope.celebrity2 = '';
				$scope.task1 = '';
				$scope.task2 = '';
				$scope.skill1 = '';
				$scope.number = '';
				$scope.adjective = '';
				$scope.hideText = true;
			};

			
		};

	});
	

