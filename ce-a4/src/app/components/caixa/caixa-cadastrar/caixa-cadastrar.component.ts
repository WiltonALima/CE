import { Component, OnInit } from '@angular/core';
import { CaixaService } from '../../../services/caixa.service';
import { Caixa } from '../../../models/caixa'
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-caixa-cadastrar',
  templateUrl: './caixa-cadastrar.component.html',
  styleUrls: ['./caixa-cadastrar.component.css']
})
export class CaixaCadastrarComponent implements OnInit {

	private id: number;

	private caixa: Caixa;

	private msg: string;

	form: FormGroup;

  	constructor(private router: Router, private route: ActivatedRoute, private caixaService: CaixaService) { }

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.caixa = new Caixa();
		if (this.id) {
			this.caixaService.obterCaixa(this.id).subscribe(
				caixa => this.caixa = caixa,
				error => this.msg = error 
				);
		} else {
			this.caixa = new Caixa();
		}

		this.form = new FormGroup({
			nome: new FormControl("", Validators.required),
			saldoDezReais: new FormControl("", Validators.required),   
			saldoVinteReais: new FormControl("", Validators.required),
			saldoCinquentaReais: new FormControl("", Validators.required),
			saldoCemReais: new FormControl("", Validators.required)
		});

	}

  	salvar() {
  		this.caixaService.salvar(this.caixa)
  			.subscribe(
  				data => this.router.navigate(['/caixas']),
  				error => this.msg = error
  			)

	}
}
