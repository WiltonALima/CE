angular.module("ce").controller("saqueCtrl", function ($scope, responseUsuarios, responseCaixas, responseSaque, saqueService, responseCaixa) {
	console.log(responseSaque);
	$scope.caixas = [];
	$scope.saque = {};
	$scope.usuarios = [];
	if (responseSaque != undefined && responseSaque.data != undefined) {
		$scope.saque = responseSaque.data;
	}
	if (responseCaixas != undefined && responseCaixas.data != undefined) {
		$scope.caixas = responseCaixas.data;
	}
	if (responseUsuarios != undefined && responseUsuarios.data != undefined) {
		$scope.usuarios = responseUsuarios.data;
	}

	if(responseCaixa!= undefined && responseCaixa.data != undefined) {
		$scope.saque.caixa = responseCaixa.data;
	}

	console.log("Tela de saques");
	console.log(responseUsuarios);
	console.log(responseCaixas);
	console.log(responseSaque);
	$scope.salvar = function(saque) {
		if ((saque.valor %10) != 0) {
			delete $scope.msg;
			$scope.formSaque.$setPristine();
			$scope.msgErro = "Erro, só é possivel realizar saques com valoes multiplos de 10!";
			return;
		}

		delete $scope.msgErro;
		console.log('valor:'+ saque.valor);
		console.log('valor:'+ saque.caixa.nome);
		console.log('valor:'+ saque.usuario.nome);
		saqueService.salvar(saque).success(function(data) {
			console.log(data);
			if (data.msgErro != undefined) {
				$scope.formSaque.$setPristine();
				$scope.msgErro = data.msgErro;
				delete $scope.msg;
				console.log($scope.msgErro);
				return;
			}
			$scope.formSaque.$setPristine();
			$scope.msg = "Salvo com sucesso!";
			$scope.saque = {};
			delete $scope.msgErro;
		});
	}
});