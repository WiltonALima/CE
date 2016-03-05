package br.com.wil.ce.core.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.wil.ce.core.model.Usuario;
@Repository
public interface UsuarioRepositorio extends CrudRepository<Usuario, Long>{
	
	@Query("SELECT u FROM Usuario u")
	public List<Usuario> listar();

	public Usuario findById(Long id);

}
