package br.com.wil.ce.servico;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import br.com.wil.ce.core.model.Caixa;
import br.com.wil.ce.core.repo.CaixaRepositorio;

@Service
@Transactional
public class CaixaServico {
	@Autowired
	private CaixaRepositorio caixaRepositorio;
	
	public List<Caixa>listar() {
		return caixaRepositorio.listar();
	}
	
	public void salvar(Caixa caixa) {
		caixaRepositorio.save(caixa);
	}

	public Caixa findById(Long id) {
		return caixaRepositorio.findById(id);
	}
}
