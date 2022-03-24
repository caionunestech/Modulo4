package br.com.viagensgo.model;

import java.util.Date;

public class Pacotes {
	private int Id;
	private String Destino;
	private int Valor;
	private Date Datadeviagem;
	private int Fk_contato; 
	
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getDestino() {
		return Destino;
	}
	public void setDestinoe(String destino) {
		Destino = destino;
	}
	public int getValor() {
		return Valor;
	}
	public void setValor(int valor) {
		Valor = valor;
	}
	public Date getDatadeviagem() {
		return Datadeviagem;
	}
	public void setDatadeviagem(Date datadeviagem) {
		Datadeviagem = datadeviagem;
	}
	public int getFk_contato() {
		return Fk_contato;
	}
	public void setFk_contato(int fk_contato) {
		Fk_contato = fk_contato;
	}


}
