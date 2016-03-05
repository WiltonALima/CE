angular.module("ce").controller("usuarioCtrl", function ($scope, usuarioService, usuarioResponse) {
	$scope.app = "Cadastro de usuários";
	console.log(usuarioResponse);
	$scope.usuario = usuarioResponse.data;
	$scope.msg = "";
	
	$scope.salvar = function(usuario) {
		console.log("Nome:" + usuario.nome);
		console.log("Nome:" + usuario.saldo);
		usuarioService.salvar(usuario).success(function() {
			$scope.formUsuario.$setPristine();
			$scope.msg = "Salvo com sucesso!";
			$scope.usuario = {};
		}). error(function() {
			$scope.formUsuario.$setPristine();
			$scope.msgErro = "Erro ao salvar o usuário!";
		});
	}
});