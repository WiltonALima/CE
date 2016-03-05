package br.com.wil.ce.crud.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.wil.ce.core.model.Caixa;
import br.com.wil.ce.core.repo.CaixaRepositorio;

@RestController
@RequestMapping(value = "/caixa")
//@CrossOrigin(origins = "http://192.168.1.32:8081/#/caixas")
public class CaixaController {
	
	
	@Autowired
	private CaixaRepositorio caixaRepositorio;
//	@CrossOrigin(origins = "http://192.168.1.32:8081")
	@CrossOrigin
	@RequestMapping(value = "/listar", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Caixa> listar() {
		return caixaRepositorio.listar();
	}
	@RequestMapping(value = "/salvar", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void salvar(@RequestBody Caixa caixa) {
		caixaRepositorio.save(caixa);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Caixa obterPorId(@PathVariable Long id) {
		return caixaRepositorio.findById(id);
	}
	
	
	
}
