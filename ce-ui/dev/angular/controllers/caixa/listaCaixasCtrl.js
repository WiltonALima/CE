angular.module("ce").controller("listaCaixasCtrl", function ($scope, caixasResponse) {
	$scope.app = "Lista de Caixas";
	$scope.caixas = caixasResponse.data;
	console.log("Lista De Caixas");



});