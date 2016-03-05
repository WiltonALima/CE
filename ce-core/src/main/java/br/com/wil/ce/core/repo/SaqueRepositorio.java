package br.com.wil.ce.core.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import br.com.wil.ce.core.model.Saque;

public interface SaqueRepositorio extends CrudRepository<Saque, Long>{
	
	@Query("SELECT s from Saque s")
	public List<Saque> listar();

	public Saque findById(Long id);
	
}
