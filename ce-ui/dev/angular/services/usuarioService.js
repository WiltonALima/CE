angular.module("ce").service("usuarioService", function($http, config) {
	var _getUsuario = function(id) {
		/*
		var response = new Object();
		response.data = {"nome":"Wilton Lima", "saldo": "15444"};
		return response;
		*/
		return $http.get(config.baseUrl + 'usuario/' + id);
	};

	var _listar = function() {
		/*
		var response = new Object();
		var usuarios = [{"id": 1, "nome": "Wilton Lima", "saldo": 1500.00},
						{"id": 2, "nome": "Geraldo da Silva", "saldo": 2500.00},
						{"id": 3, "nome": "Jeremiass José", "saldo": 150.00},
						{"id": 4, "nome": "Carlos da Silva", "saldo": 500.00},
						{"id": 5, "nome": "Carlos Nascimento", "saldo": 100.00},
						{"id": 6, "nome": "Tereza da Silva", "saldo": 1000.00}];
		response.data = usuarios;
		return response;
		*/
		return $http.get(config.baseUrl + 'usuario/listar');

	}

	var _salvar = function(usuario) {
		return $http.post(config.baseUrl + 'usuario/salvar', usuario);
	}

	return {
		listar:_listar,
		getUsuario: _getUsuario,
		salvar : _salvar
	}

});