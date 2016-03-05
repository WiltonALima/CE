angular.module("ce").service("saqueService", function($http, config) {

	var _getSaque = function(id) {
		/*
		var response = new Object();
		if (id == 1) {
			response.data = {id:1, valor:1.500, 
			caixa:{"id": 6, "nome": "Shopping Colinas Caixa 3", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00}, 
			usuario:{"id": 1, "nome": "Wilton Lima", "saldo": 1200.00}};
			return response;
		}
		
		response.data = {id:2, valor:"1.200", 
		caixa:{"id": 1, "nome": "Carrefour Aquarius Caixa 1", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00}, 
		usuario:{"id": 3, "nome": "Jeremiass José", "saldo": 1500.00}};
		return response;
		*/
		return $http.get(config.baseUrl + 'saque/' + id);
	};


	var _getSaques = function() {
		/*
		var response = new Object();
		response.data = [{"id":1, valor:1.500, caixa:{"id": 6, "nome": "Shopping Colinas Caixa 3", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00}, usuario:{"nome":"Wilton Lima", "saldo": "15444"}},
						{"id":2, valor:1.200, caixa:{"id": 1, "nome": "Carrefour Aquarius Caixa 1", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00}, usuario:{"id": 3, "nome": "Jeremiass José", "saldo": 150.00}}];
		return response;
		*/
		return $http.get(config.baseUrl + 'saque/listar');
	};

	var _salvar = function(saque) {
		return $http.post(config.baseUrl + 'saque/salvar', saque);
	}
	return {
		listar:_getSaques,
		getSaque:_getSaque,
		salvar: _salvar
	}

});