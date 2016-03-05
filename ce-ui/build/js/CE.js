console.log('Lendo o conteudo de app.JS');
angular.module("ce", ["ngRoute", "ngMessages", "ui.utils.masks"]);
console.log('Leu o conteudo de app.JS');
console.log('Leu o conteudo de app.JS');
console.log('Leu o conteudo de app.JS');
console.log('Logando o conteudo de config.JS');

console.log('Logando o conteudo de modules.JS');
angular.module("ce").config(function($routeProvider) {
	//USUARIO
	$routeProvider.when("/usuario", {
		templateUrl:"build/view/usuario/usuario.html",
		controller:"usuarioCtrl",
		resolve: {
			usuarioResponse : function() {
				var response = new Object();
				response.data = {};
				return response;
			}

		}
	});

	$routeProvider.when("/usuario/:id", {
		templateUrl:"build/view/usuario/usuario.html",
		controller:"usuarioCtrl",
		resolve: {
			usuarioResponse : function(usuarioService, $route) {
				return usuarioService.getUsuario($route.current.params.id);
			}

		}
	});
	$routeProvider.when("/usuarios", {
		templateUrl:"build/view/usuario/usuarios.html",
		controller:"listaUsuariosCtrl",
		resolve: {
			usuariosResponse : function(usuarioService) {
				return usuarioService.listar();
			}
		}
	});

	// CAIXA

	$routeProvider.when("/caixa", {
		templateUrl:"build/view/caixa/caixa.html",
		controller:"caixaCtrl",
		resolve: {
			caixaResponse : function() {
				var response = new Object();
				response.data = {};
				return response;
			}

		}
	});

	$routeProvider.when("/caixa/:id", {
		templateUrl:"build/view/caixa/caixa.html",
		controller:"caixaCtrl",
		resolve: {
			caixaResponse : function(caixaService, $route) {
				return caixaService.getCaixa($route.current.params.id);
			}

		}
	});
	

	$routeProvider.when("/caixas", {
		templateUrl:"build/view/caixa/caixas.html",
		controller:"listaCaixasCtrl",
		resolve: {
			caixasResponse : function(caixaService) {
				return caixaService.listar();
			}
		}
	});

	$routeProvider.when("/saqueCaixa/:idCaixa/", {
		templateUrl:"build/view/saque/saque.html",
		controller:"saqueCtrl",
		resolve: {
			responseUsuarios: function($route, usuarioService) {
				return usuarioService.listar();
			},
			responseCaixas: function($route, caixaService) {
				return caixaService.listar();
			},
			responseCaixa: function($route, caixaService) {
				return caixaService.getCaixa($route.current.params.idCaixa);
			},
			responseSaque: function() {
				return new Object();
			}
		}
	});

	$routeProvider.when("/saque", {
		templateUrl:"build/view/saque/saque.html",
		controller:"saqueCtrl",
		resolve: {
			responseUsuarios: function($route, usuarioService) {
				return usuarioService.listar();
			},
			responseCaixas: function($route, caixaService) {
				return caixaService.listar();
			},
			responseSaque: function($route, caixaService) {
				var response = new Object();
				response.data = {};
				response.data.saque;
				return response;
			},
			responseCaixa: function() {
				return new Object();
			}
		}
	});

	// Teste 
	$routeProvider.when("/saque/:id", {
		templateUrl:"build/view/saque/saque.html",
		controller:"saqueCtrl",
		resolve: {
			responseUsuarios: function($route, usuarioService) {
				return usuarioService.listar();
			},
			responseCaixas: function($route, caixaService) {
				return caixaService.listar();
			},
			responseSaque: function($route, saqueService) {
				return saqueService.getSaque($route.current.params.id);
			},
			responseCaixa: function() {
				return new Object();
			}
		}
	});

	$routeProvider.when("/saques", {
		templateUrl:"build/view/saque/saques.html",
		controller:"listaSaquesCtrl",
		resolve: {
			saquesResponse : function(saqueService) {
				return saqueService.listar();
			}
		}
	});


	$routeProvider.otherwise({redirectTo:"/caixas"});
})
angular.module("ce").controller("listaUsuariosCtrl", function ($scope, usuariosResponse) {
	$scope.app = "Lista de usuários";
	$scope.usuarios = usuariosResponse.data;
	console.log("Lista De Usuario");
	
})
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
angular.module("ce").service("caixaService", function($http, config) {
	var _getCaixa = function(id) {
		/*
		var response = new Object();
		response.data = {"id": 4, "nome": "Shopping Colinas Caixa 1", "saldoDezReais": 1500.00, "saldoVinteReais": 2500.00, "saldoCinquentaReais": 150.00, "saldoCemReais": 2000.00};
		return response;
		*/
		//return $http.get(config.baseUrl + 'caixa/' + id);
		return $http({
            method: 'GET',
            url: config.baseUrl + 'caixa/listar', 
            headers: {'Access-Control-Allow-Origin': config.baseUrl + 'caixa/listar'}
        })
		
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
angular.module('ce').constant('config', {
	baseUrl:'http://192.168.1.32:8080/ce-crud/api/'
});
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
angular.module("ce").controller("listaCaixasCtrl", function ($scope, caixasResponse) {
	$scope.app = "Lista de Caixas";
	$scope.caixas = caixasResponse.data;
	console.log("Lista De Caixas");



});
angular.module("ce").controller("listaSaquesCtrl", function ($scope, saquesResponse) {
	$scope.app = "Lista de saques";
	$scope.saques = saquesResponse.data;
	console.log("Lista De Saques");
	
})
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