package br.com.wil.ce.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Caixa {
	
	private Long id;
	private String nome;
	private Double saldoDezReais;
	private Double saldoVinteReais;
	private Double saldoCinquentaReais;
	private Double saldoCemReais;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	@Column(name = "saldo_dez_reais")
	public Double getSaldoDezReais() {
		return saldoDezReais;
	}
	public void setSaldoDezReais(Double saldoDezReais) {
		this.saldoDezReais = saldoDezReais;
	}
	@Column(name = "saldo_vinte_reais")
	public Double getSaldoVinteReais() {
		return saldoVinteReais;
	}
	public void setSaldoVinteReais(Double saldoVinteReais) {
		this.saldoVinteReais = saldoVinteReais;
	}
	@Column(name = "saldo_cinquenta_reais")
	public Double getSaldoCinquentaReais() {
		return saldoCinquentaReais;
	}
	public void setSaldoCinquentaReais(Double saldoCinquentaReais) {
		this.saldoCinquentaReais = saldoCinquentaReais;
	}
	@Column(name = "saldo_cem_reais")
	public Double getSaldoCemReais() {
		return saldoCemReais;
	}
	public void setSaldoCemReais(Double saldoCemReais) {
		this.saldoCemReais = saldoCemReais;
	}
	@Transient
	public Double totalDinheiro() {
		Double saldoTotal = 0.0;
		if (saldoCemReais != null) {
			saldoTotal += saldoCemReais;
		}
		if (saldoCinquentaReais != null) {
			saldoTotal += saldoCinquentaReais;
		}
		if (saldoVinteReais != null) {
			saldoTotal += saldoVinteReais;
		}
		if (saldoDezReais != null) {
			saldoTotal += saldoDezReais;
		}
		return saldoTotal;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Caixa other = (Caixa) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
}
