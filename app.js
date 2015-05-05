'use strict';

angular.module('madLibs',[])
	.controller('MainCtrl',function ($scope){
		$scope.name = '';
		$scope.jtitle = '';
		$scope.task1 = '';
		$scope.task2 = '';
		$scope.celebrity = '';	
		$scope.skill1 = '';
		$scope.celebrity2 = '';
		$scope.number = '';
		$scope.adjective = '';
	});