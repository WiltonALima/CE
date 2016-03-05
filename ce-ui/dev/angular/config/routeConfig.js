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