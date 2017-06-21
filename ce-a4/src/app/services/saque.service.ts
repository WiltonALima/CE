import { Injectable } from '@angular/core';
import { ObserverUtilsService } from './observer-utils.service';
import { Http } from '@angular/http';
import { Saque } from '../models/saque';

@Injectable()
export class SaqueService {

  constructor(private http: Http, private httpUtil: ObserverUtilsService) {

  }

  obterSaque(id: number) {
    return this.http.get(this.httpUtil.url('/saque/' + id), this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }

  listarSaques() {
  	return this.http.get(this.httpUtil.url('saque/listar'), this.httpUtil.headers())
  		.map(this.httpUtil.extrairDados)
  		.catch(this.httpUtil.processarErros)
  }

  salvarSaque(saque: Saque) {
  	let param = JSON.stringify(saque);
  	return this.http.post(this.httpUtil.url('saque/salvar'), param, this.httpUtil.headers())
  		.catch(this.httpUtil.processarErros)
  }
}
