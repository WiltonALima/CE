import { Component, OnInit } from '@angular/core';
import { Caixa} from '../../../models/Caixa';
import { CaixaService } from '../../../services/caixa.service';
@Component({
  selector: 'app-caixa-listar',
  templateUrl: './caixa-listar.component.html',
  styleUrls: ['./caixa-listar.component.css']
})
export class CaixaListarComponent implements OnInit {
	private criterio: string;
	private caixas : Caixa[];
  private erros
  	constructor(private caixaService: CaixaService) { }

  	ngOnInit() {
  		this.caixaService.listarCaixas()
  			.subscribe(
            caixas => this.caixas = caixas,
            error => this.erros = error
          )
  }

}
