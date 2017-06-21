import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ObserverUtilsService } from './observer-utils.service';
import { Caixa } from '../models/caixa';

@Injectable()
export class CaixaService {

  constructor(private http: Http, private httpUtil : ObserverUtilsService) { }


  listarCaixas() : Observable<Caixa[]>{
  	return this.http.get(this.httpUtil.url('caixa/listar'), this.httpUtil.headers())
  		.map(this.httpUtil.extrairDados)
  			.catch(this.httpUtil.processarErros);
  }

  salvar(caixa: Caixa) {
  	let params = JSON.stringify(caixa);
  	return this.http.post(this.httpUtil.url("caixa/salvar"), params, this.httpUtil.headers())
  			.catch(this.httpUtil.processarErros)
  }

  obterCaixa(id: number) : Observable<Caixa> {
  	return this.http.get(this.httpUtil.url('caixa/' + id), this.httpUtil.headers())
  		.map(this.httpUtil.extrairDados)
  		.catch(this.httpUtil.processarErros);
  }


}
