import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { ObserverUtilsService } from './observer-utils.service'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpUtilsService {



	private API_URL: string = 'http://localhost:3000/api/';

  	constructor( private http: Http, private observerUtils : ObserverUtilsService) { }

  	url(path: string) {
  		return this.observerUtils.API_URL + path;
  	}

  	headers() {
    	return this.observerUtils.headers();
	}
}
