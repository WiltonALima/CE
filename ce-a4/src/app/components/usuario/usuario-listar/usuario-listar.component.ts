import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../../models/usuario';
import {UsuarioService} from '../../../services/usuario.service'
@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

	usuarios: Usuario[];
	criterio: string;
	msgErro: string;

	constructor(private usuarioService: UsuarioService) { }
	
	ngOnInit() {
		this.usuarioService.listarUsuarios().subscribe(
                	usuarios => this.usuarios = usuarios,
                	error  => this.msgErro = error);
	}

	ordenarPor(nomeCampo) {
		
	}

}
