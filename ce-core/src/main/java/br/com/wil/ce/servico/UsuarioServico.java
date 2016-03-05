package br.com.wil.ce.servico;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.wil.ce.core.model.Usuario;
import br.com.wil.ce.core.repo.UsuarioRepositorio;

@Service
@Transactional
public class UsuarioServico {
	
	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	public List<Usuario> listar(){
		return usuarioRepositorio.listar();
	}
	
	public void salvar(Usuario usuario) {
		usuarioRepositorio.save(usuario);
	}

	public Usuario findById(Long id) {
		return usuarioRepositorio.findById(id);
	}
}
