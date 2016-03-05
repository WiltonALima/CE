angular.module("ce").controller("caixaCtrl", function ($scope, caixaService, caixaResponse) {
	
	$scope.caixa = caixaResponse.data;
	$scope.salvar = function(caixa) {
		console.log("caixa:" + caixa.nome);
		console.log("saldoDezReais:" + caixa.saldoDezReais);
		console.log("saldoVinteReais:" + caixa.saldoVinteReais);
		console.log("saldoCinquentaReais:" + caixa.saldoCinquentaReais);
		console.log("saldoCemReais:" + caixa.saldoCemReais);
		caixaService.salvar(caixa).success(function() {
			$scope.formCaixa.$setPristine();
			$scope.caixa = {};
			
			$scope.msg = "Salvo com sucesso";
		}).error(function() {
			alert("Erro ao salvar!");
		})
	}
});