import { Routes , RouterModule} from '@angular/router';
import { UsuarioListarComponent } from './components/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCadastrarComponent } from './components/usuario/usuario-cadastrar/usuario-cadastrar.component';
import { CaixaListarComponent } from './components/caixa/caixa-listar/caixa-listar.component';
import { CaixaCadastrarComponent } from './components/caixa/caixa-cadastrar/caixa-cadastrar.component';
import { SaqueListarComponent } from './components/saque/saque-listar/saque-listar.component';
import { SaqueCadastrarComponent } from './components/saque/saque-cadastrar/saque-cadastrar.component';

export const APP_ROUTES : Routes = [
	{
		path: 'usuarios',
		component: UsuarioListarComponent
	},
	{
		path: 'usuario',
		component: UsuarioCadastrarComponent
	},
	{
		path: 'usuario/:id',
		component: UsuarioCadastrarComponent
	},
	{
		path: 'caixas',
		component: CaixaListarComponent
	},
	{
		path: 'caixa',
		component: CaixaCadastrarComponent
	},
	{
		path: 'caixa/:id',
		component: CaixaCadastrarComponent
	},
	{
		path: 'saques',
		component: SaqueListarComponent
	},
	{
		path: 'saque',
		component: SaqueCadastrarComponent
	},
	{
		path: 'saque/:id',
		component: SaqueCadastrarComponent
	}

]