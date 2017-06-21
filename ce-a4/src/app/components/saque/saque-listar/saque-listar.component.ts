import { Component, OnInit } from '@angular/core';
import { Saque } from '../../../models/saque';
import { SaqueService } from '../../../services/saque.service';

@Component({
  selector: 'app-saque-listar',
  templateUrl: './saque-listar.component.html',
  styleUrls: ['./saque-listar.component.css']
})

export class SaqueListarComponent implements OnInit {

	private saques: Saque[];
	private msg: string;

  	constructor(private saqueService: SaqueService) {

  }

  ngOnInit() {
  	this.saqueService.listarSaques()
  		.subscribe(
  			saques => this.saques = saques,
  			error => this.msg = error
  			);
  }

  ordenarPor(nome) {

  }
}
