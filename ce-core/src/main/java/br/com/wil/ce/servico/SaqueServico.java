package br.com.wil.ce.servico;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.wil.ce.core.model.Caixa;
import br.com.wil.ce.core.model.Saque;
import br.com.wil.ce.core.model.Usuario;
import br.com.wil.ce.core.repo.SaqueRepositorio;
import br.com.wil.ce.core.repo.UsuarioRepositorio;

@Service
@Transactional
public class SaqueServico {
	
	@Autowired
	private CaixaServico caixaServico;
	
	@Autowired
	private UsuarioServico usuarioServico;
	
	@Autowired
	private SaqueRepositorio saqueRepositorio;
	
	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	public List<Saque> listar(){
		return saqueRepositorio.listar();
	}
	
	public void sacar(Saque saque) throws SaqueException{
		Caixa caixa = caixaServico.findById(saque.getCaixa().getId());
		Usuario usuario = usuarioServico.findById(saque.getUsuario().getId());
		Double saqueRestante = 0.0;
		Double valorSaque = 0.0;
		if (saque.getValor() > usuario.getSaldo()) {
			throw new SaqueException("Erro, Saldo insuficiente!");
		}
		if (saque.getValor() > caixa.totalDinheiro()) {
			throw new SaqueException("Erro, caixa com dinheiro insuficente para o saque!");
		}
		
		if (isMultiplo(saque.getValor(), 100)) {
			Double divisao = saque.getValor().doubleValue()/100;
			Double saque100 = (double) divisao.intValue() * 100;
			saqueRestante = saque.getValor() - saque100;
			caixa.setSaldoCemReais(caixa.getSaldoCemReais() - saque100);
			saque.setValor(saqueRestante);
			valorSaque += saque100 ;
		}
		if (saque.getValor() > 0 && isMultiplo(saque.getValor(), 50)) {
			Double divisao = saque.getValor().doubleValue()/50;
			double saque50 = divisao.intValue() * 50;
			saqueRestante = saque.getValor() - saque50;
			caixa.setSaldoCinquentaReais(caixa.getSaldoCinquentaReais() - saque50);
			saque.setValor(saqueRestante);
			valorSaque += saque50;
			
		}
		if (isMultiplo(saque.getValor(), 20)) {
			Double divisao = saque.getValor().doubleValue()/20;
			double saque20 = divisao.intValue() * 20;
			saqueRestante = saque.getValor() - saque20;
			caixa.setSaldoVinteReais(caixa.getSaldoVinteReais() - saque20);
			saque.setValor(saqueRestante);
			valorSaque += saque20;
			
		}
		if (isMultiplo(saque.getValor(), 10)) {
			Double divisao = saque.getValor().doubleValue()/10;
			double saque10 = divisao.intValue() * 10;
			saqueRestante = saque.getValor() - saque10;
			saque.setValor(saqueRestante);
			caixa.setSaldoDezReais(caixa.getSaldoDezReais() - saque10);
			valorSaque += saque10;
			
		}
		
		if (saque.getValor() > 0) {
			throw new SaqueException("Erro, notas incompativeis para realizar o saque!!");
		}
		
		usuario.setSaldo(usuario.getSaldo() - valorSaque);
		saque.setValor(valorSaque);
		usuarioServico.salvar(usuario);
		saqueRepositorio.save(saque);
		caixaServico.salvar(caixa);
	}
	
	public Saque findById(Long id) {
		return saqueRepositorio.findById(id);
	}

	public CaixaServico getCaixaServico() {
		return caixaServico;
	}

	public void setCaixaServico(CaixaServico caixaServico) {
		this.caixaServico = caixaServico;
	}

	public SaqueRepositorio getSaqueRepositorio() {
		return saqueRepositorio;
	}

	public void setSaqueRepositorio(SaqueRepositorio saqueRepositorio) {
		this.saqueRepositorio = saqueRepositorio;
	}
	
	public UsuarioServico getUsuarioServico() {
		return usuarioServico;
	}

	public void setUsuarioServico(UsuarioServico usuarioServico) {
		this.usuarioServico = usuarioServico;
	}
	
	public boolean isMultiplo(Double valor, Integer multiplo ) {
		double resultado = valor/multiplo;
		
		if (resultado >= 0) {
			return true;
		}
		return false;
	}
}
