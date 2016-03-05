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
			int inteiro = (int)saque.getValor().doubleValue()/100;
			int saque100 = inteiro * 100;
			saqueRestante = saque.getValor() - saque100;
			caixa.setSaldoCemReais(caixa.getSaldoCemReais() - saque100);
			saque.setValor(saqueRestante);
			valorSaque += saque100 ;
		}
		if (isMultiplo(saque.getValor(), 50)) {
			int inteiro = (int)saque.getValor().doubleValue()/50;
			int saque50 = inteiro * 50;
			saqueRestante = saque.getValor() - saque50;
			caixa.setSaldoCinquentaReais(caixa.getSaldoCinquentaReais() - saque50);
			saque.setValor(saqueRestante);
			valorSaque += saque50;
			
		}
		if (isMultiplo(saque.getValor(), 20)) {
			int inteiro = (int)saque.getValor().doubleValue()/20;
			int saque20 = inteiro * 20;
			saqueRestante = saque.getValor() - saque20;
			caixa.setSaldoVinteReais(caixa.getSaldoVinteReais() - saque20);
			saque.setValor(saqueRestante);
			valorSaque += saque20;
			
		}
		if (isMultiplo(saque.getValor(), 10)) {
			int inteiro = (int)saque.getValor().doubleValue()/10;
			int saque10 = inteiro * 10;
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
		Integer resultado = (int) (valor/multiplo);
		
		if (resultado > 0) {
			return true;
		}
		return false;
	}
}
