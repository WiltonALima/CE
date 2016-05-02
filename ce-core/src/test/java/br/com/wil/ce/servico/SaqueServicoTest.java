package br.com.wil.ce.servico;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import org.junit.Test;

import br.com.wil.ce.core.model.Caixa;
import br.com.wil.ce.core.model.Saque;
import br.com.wil.ce.core.model.Usuario;
import br.com.wil.ce.core.repo.CaixaRepositorio;
import br.com.wil.ce.core.repo.SaqueRepositorio;
import br.com.wil.ce.core.repo.UsuarioRepositorio;

public class SaqueServicoTest {
	SaqueServico saqueServico;
	SaqueRepositorio saqueRepositorio;
	CaixaServico caixaServico;
	UsuarioServico usuarioServico;
	
	public Saque getSaqueInicializado() {
		Caixa caixa = new Caixa();
		caixa.setId(1L);
		caixa.setNome("Caixa teste");
		caixa.setSaldoDezReais(10d);
		caixa.setSaldoVinteReais(20d);
		caixa.setSaldoCinquentaReais(50d);
		caixa.setSaldoCemReais(100d);
		
		Saque saque = new Saque();
		saque.setCaixa(caixa);
		saque.setValor(1530d);
		return saque;
	}
	
	@Test
	public void testSaqueDinheiInsuficienteCaixa() {
		inicializarServicoes();
		
		Saque saque = getSaqueInicializado();
		Usuario usuario = new Usuario();
		usuario.setId(2l);
		usuario.setSaldo(80d);
		saque.setUsuario(usuario);
		when(usuarioServico.findById(anyLong())).thenReturn(saque.getUsuario());
		saque.setValor(100d);
		when(caixaServico.findById(anyLong())).thenReturn(saque.getCaixa());
		try{
			saqueServico.sacar(saque);
			fail();
		} catch (SaqueException e) {
			assertEquals("Erro, Saldo insuficiente!", e.getMessage());
		}
		verify(caixaServico, atLeastOnce()).findById(anyLong());
		
	}
	
	@Test
	public void testVerificarSaqueQuantidadeMaximaCaixa() {
		inicializarServicoes();
		Saque saque = getSaqueInicializado();
		Usuario usuario = new Usuario();
		usuario.setId(2l);
		usuario.setSaldo(4000d);
		saque.setUsuario(usuario);
		when(usuarioServico.findById(anyLong())).thenReturn(saque.getUsuario());
		saque.setValor(180d);
		when(caixaServico.findById(anyLong())).thenReturn(saque.getCaixa());
		try{
			saqueServico.sacar(saque);
		} catch (SaqueException e) {
			
		}
		assertEquals(saque.getCaixa().getSaldoCemReais(), new Double(0.0));
		assertEquals(saque.getCaixa().getSaldoCinquentaReais(), new Double(0.0));
		assertEquals(saque.getCaixa().getSaldoVinteReais(), new Double(0.0));
		assertEquals(saque.getCaixa().getSaldoDezReais(), new Double(0.0));
		
//		verify(saqueRepositorio, atLeastOnce()).findById(anyLong());
		verify(caixaServico, atLeastOnce()).findById(anyLong());
		verify(saqueRepositorio, atLeastOnce()).save(any(Saque.class));
		
	}
	
	@Test
	public void testVerificarSaldoInsuficiente() {
		inicializarServicoes();
		Saque saque = getSaqueInicializado();
		Usuario usuario = new Usuario();
		usuario.setId(2l);
		usuario.setSaldo(4000d);
		saque.setUsuario(usuario);
		when(usuarioServico.findById(anyLong())).thenReturn(saque.getUsuario());
		saque.setValor(8000d);
		when(caixaServico.findById(anyLong())).thenReturn(saque.getCaixa());

		try{
			saqueServico.sacar(saque);
			fail();
		} catch (SaqueException e) {
			
		}
//		verify(saqueRepositorio, atLeastOnce()).findById(anyLong());
		verify(caixaServico, atLeastOnce()).findById(anyLong());
//		verify(saqueRepositorio, atLeastOnce()).save(any(Saque.class));
	}
	
	@Test
	public void testSubtrairSaldoCliente() {
		inicializarServicoes();
		Saque saque = getSaqueInicializado();
		Usuario usuario = new Usuario();
		usuario.setId(2l);
		usuario.setSaldo(1000d);
		saque.setUsuario(usuario);
		when(usuarioServico.findById(anyLong())).thenReturn(saque.getUsuario());
		saque.setValor(150d);
		when(caixaServico.findById(anyLong())).thenReturn(saque.getCaixa());

		try {
			saqueServico.sacar(saque);
			assertEquals(usuario.getSaldo(), new Double(850d));
		} catch (SaqueException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
//		verify(saqueRepositorio, atLeastOnce()).findById(anyLong());
		verify(caixaServico, atLeastOnce()).findById(anyLong());
//		verify(saqueRepositorio, atLeastOnce()).save(any(Saque.class));
	}
	
	private void inicializarServicoes() {
		saqueServico=  new SaqueServico();
		saqueServico.setCaixaServico(mock(CaixaServico.class));
		saqueRepositorio = mock(SaqueRepositorio.class);
		saqueServico.setSaqueRepositorio(saqueRepositorio);
		caixaServico = mock(CaixaServico.class);
		saqueServico.setCaixaServico(caixaServico);
		usuarioServico = mock(UsuarioServico.class);
		saqueServico.setUsuarioServico(usuarioServico);
	}
}
