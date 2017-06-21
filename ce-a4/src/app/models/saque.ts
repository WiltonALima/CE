import { Caixa} from './caixa';
import { Usuario } from './usuario';


export class Saque {
	constructor(
		
		public id?: number,
		public caixa?: Caixa,
		public usuario?: Usuario,
		public valor?: number

	) {
	}
}
