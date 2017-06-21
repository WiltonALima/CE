import { Injectable } from '@angular/core';
//import { HttpUtilsService } from './http-utils.service'
import { ObserverUtilsService } from './observer-utils.service'
import { Http } from '@angular/http';
import 'rxjs/add/observable/throw'
import { Observable } from 'rxjs/Rx';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {

  constructor( private http: Http, private httpUtil: ObserverUtilsService) { }

  listarUsuarios() : Observable<Usuario[]> {		 	
  	return this.http.get(this.httpUtil.url('usuario/listar'), this.httpUtil.headers())
  			.map(this.httpUtil.extrairDados)
	            .catch(this.httpUtil.processarErros);
  }

  salvar(usuario: Usuario) {
  	let params = JSON.stringify(usuario);
  	return this.http.post(this.httpUtil.url('usuario/salvar'), params, this.httpUtil.headers())
  		.catch(this.httpUtil.processarErros);
  }

  obterUsuario(id: number) {
    return this.http.get(this.httpUtil.url('/usuario/'+ id), this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }


}
