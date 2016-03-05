angular.module("ce").service("caixaService", function($http, config) {
	var _getCaixa = function(id) {
		/*
		var response = new Object();
		response.data = {"id": 4, "nome": "Shopping Colinas Caixa 1", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00};
		return response;
		*/
		return $http.get(config.baseUrl + 'caixa/' + id);
	};

	var _listar = function() {
		/*
		var response = new Object();
		var caixas = [{"id": 1, "nome": "Carrefour Aquarius Caixa 1", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00},
						{"id": 2, "nome": "Carrefour Aquarius Caixa 2", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00},
						{"id": 3, "nome": "Carrefour Aquarius Caixa 3", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00},
						{"id": 4, "nome": "Shopping Colinas Caixa 1", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00},
						{"id": 5, "nome": "Shopping Colinas Caixa 2", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00},
						{"id": 6, "nome": "Shopping Colinas Caixa 3", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00}];
		response.data = caixas;
		return response;
		*/
		/*
		return $http({
            method: 'GET',
            url: config.baseUrl + 'caixa/listar', 
            headers: {'Access-Control-Allow-Origin': config.baseUrl + 'caixa/listar'}
        })
		*/

		return $http.get(config.baseUrl + 'caixa/listar');
	}
	var _salvar = function(caixa) {
		return $http.post(config.baseUrl + 'caixa/salvar', caixa);
	}

	return {
		listar:_listar,
		getCaixa: _getCaixa,
		salvar: _salvar
	}

});