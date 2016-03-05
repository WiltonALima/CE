angular.module("ce").controller("listaUsuariosCtrl", function ($scope, usuariosResponse) {
	$scope.app = "Lista de usuários";
	$scope.usuarios = usuariosResponse.data;
	console.log("Lista De Usuario");
	
})