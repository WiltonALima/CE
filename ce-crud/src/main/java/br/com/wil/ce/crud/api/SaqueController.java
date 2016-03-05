package br.com.wil.ce.crud.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.wil.ce.core.model.Saque;
import br.com.wil.ce.servico.SaqueException;
import br.com.wil.ce.servico.SaqueServico;
@RestController
@RequestMapping(value = "/saque")
public class SaqueController {
	@Autowired
	private SaqueServico saqueServico;
	
	@RequestMapping(value = "/listar", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Saque> listar() {
		return saqueServico.listar();
	}
	
	@RequestMapping(value = "/salvar", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String, String> salvar(@RequestBody Saque saque) {
		Map<String, String> response = new HashMap<>();
		try {
			saqueServico.sacar(saque);
		} catch (SaqueException e) {
			response.put("msgErro", e.getMessage());
			e.printStackTrace();
		} catch (Exception e) {
			response.put("msgErro", "Erro ao realizar o saque!");
		}
		return response;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Saque obterPorId(@PathVariable Long id) {
		return saqueServico.findById(id);
	}
}
