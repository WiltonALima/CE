angular.module("ce").controller("listaSaquesCtrl", function ($scope, saquesResponse) {
	$scope.app = "Lista de saques";
	$scope.saques = saquesResponse.data;
	console.log("Lista De Saques");
	
})