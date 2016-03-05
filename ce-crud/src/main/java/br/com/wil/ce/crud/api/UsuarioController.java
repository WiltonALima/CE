package br.com.wil.ce.crud.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.wil.ce.core.model.Usuario;
import br.com.wil.ce.core.repo.UsuarioRepositorio;
import br.com.wil.ce.servico.UsuarioServico;

@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioServico usuarioServico;
	
	@RequestMapping(value = "/listar", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Usuario> usuarios() {
//		List<String> usuarios = new ArrayList<String>();
//		usuarios.add("Wilton");
//		usuarios.add("Heitor");
//		usuarios.add("Patricia");
//		return usuarios;
		return usuarioServico.listar();
	}
	
	@RequestMapping(value = "/salvar", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void salvar(@RequestBody Usuario usuario) {
		usuarioServico.salvar(usuario);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Usuario obterPorId(@PathVariable Long id) {
		return usuarioServico.findById(id);
	}
}
