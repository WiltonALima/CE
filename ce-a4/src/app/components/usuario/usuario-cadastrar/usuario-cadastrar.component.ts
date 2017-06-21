import { Component, OnInit, Inject } from '@angular/core';
import { Usuario} from '../../../models/usuario';
import {UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

	private usuario: Usuario;
	private msg: string;
	private msgErro: string;
	private id: number;

	formTe;

	constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService) {

		
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.usuario = new Usuario();
		this.msgErro = '';
		this.msg = '';
		if (this.id) {
			this.usuarioService.obterUsuario(this.id)
				.subscribe(
					usuario => this.usuario = usuario,
					error => this.msg = error
				)
		}

		this.formTe = new FormGroup({
			nome: new FormControl("", Validators.required),
			saldo: new FormControl("", Validators.required)
		});

	}

	salvar() {
		this.usuarioService.salvar(this.usuario)
			.subscribe(
				data => this.router.navigate(['/usuarios']),
				error => alert(error)
				);
  	}

}
