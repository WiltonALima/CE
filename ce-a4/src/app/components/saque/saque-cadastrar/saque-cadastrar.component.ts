import { Component, OnInit } from '@angular/core';
import { Saque } from '../../../models/Saque';
import { SaqueService } from '../../../services/saque.service'
import { UsuarioService } from '../../../services/usuario.service'
import { CaixaService } from '../../../services/caixa.service'
import { Usuario } from '../../../models/usuario';
import { Caixa } from '../../../models/caixa';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saque-cadastrar',
  templateUrl: './saque-cadastrar.component.html',
  styleUrls: ['./saque-cadastrar.component.css']
})
export class SaqueCadastrarComponent implements OnInit {

	public saque: Saque;
	private msg: string;
	private msgErro: string;
  private usuarios: Usuario[];
  private caixas: Caixa[];
  private idUsuario: number;
  private idCaixa: number;
  private id: number;

  constructor(private saqueService: SaqueService, private usuarioService: UsuarioService, private caixaService: CaixaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.saque = new Saque();
    this.id =+ this.route.snapshot.params['id'];
    if (this.id) {
      this.saqueService.obterSaque(this.id)
        .subscribe(
          saque => this.saque = saque,
          error => this.msgErro = error
        );
    }

    this.usuarioService.listarUsuarios()
      .subscribe(
        usuarios => this.usuarios = usuarios,
        error => this.msgErro = error
      );

    this.caixaService.listarCaixas()
      .subscribe(
        caixas => this.caixas = caixas,
        error => this.msgErro = error
      );

  }

  definirUsuario(lista: Usuario[], id:number) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id != undefined && lista[i].id == id) {
        return lista[i];
      }
    }
    return null;
  }

  salvar() {
    console.log("TESTE 1");
    console.log(this.saque);
    console.log("TESTE 2");
    console.log(this.saque);
  	this.saqueService.salvarSaque(this.saque)
  		.subscribe(
  			data => this.processaResponse(data),
  			error => this.msgErro = error
  	  );
  }

  processaResponse(data) {
    console.log("======");
    console.log(data._body);
    console.log("======");
    console.log(data._body.msgErro);
    let response = JSON.parse(data._body);
    if (response.msgErro) {
      this.msgErro = response.msgErro;
    } else {
      this.router.navigate(['/saques']);
    }
  }

  usuarioById(p1: Usuario, p2: Usuario) {
    if (p1 && p2) {
      return p1.id === p2.id;
    }
    return false;
  }

  caixaById(c1: Caixa, c2: Caixa) {
    if (c1 && c2) {
      return c1.id === c2.id;
    }
    return false;
  }

}
