package br.com.wil.ce.core.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.wil.ce.core.model.Caixa;
@Repository
public interface CaixaRepositorio extends CrudRepository<Caixa, Long>{
	
	@Query("SELECT c FROM Caixa c")
	public List<Caixa> listar();

	public Caixa findById(Long id);
}
