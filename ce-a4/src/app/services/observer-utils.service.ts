import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ObserverUtilsService {

	public API_URL: string = 'http://localhost:8089/ce-crud/api/';

  	constructor() { }

  	url(path: string) {
  		return this.API_URL + path;
  	}

  	headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		if (localStorage['token']) {
			headersParams['Authorization'] = localStorage['token'];
		}
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}
  	
	extrairDados(response: Response) {
      console.log(response);
    	let data = {};
      if (response) {
        data = response.json();
      }
    	return data || {};
  	}

  	processarErros(erro: any) {
	    return Observable.throw('Erro acessando servidor remoto.');
	}

}
