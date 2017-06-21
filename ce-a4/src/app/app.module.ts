import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app-routes';
import { UsuarioListarComponent } from './components/usuario/usuario-listar/usuario-listar.component';
import { ObserverUtilsService} from './services/observer-utils.service';
import { UsuarioService} from './services/usuario.service';
import { UsuarioCadastrarComponent } from './components/usuario/usuario-cadastrar/usuario-cadastrar.component';
import { CaixaListarComponent } from './components/caixa/caixa-listar/caixa-listar.component';
import { CaixaService} from './services/caixa.service';
import { CaixaCadastrarComponent } from './components/caixa/caixa-cadastrar/caixa-cadastrar.component';
import { SaqueListarComponent } from './components/saque/saque-listar/saque-listar.component';
import { SaqueService} from './services/saque.service';
import { SaqueCadastrarComponent } from './components/saque/saque-cadastrar/saque-cadastrar.component';
import {LOCALE_ID} from '@angular/core';
import { CurrencyMaskModule } from "ng2-currency-mask";
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    UsuarioListarComponent,
    UsuarioCadastrarComponent,
    CaixaListarComponent,
    CaixaCadastrarComponent,
    SaqueListarComponent,
    SaqueCadastrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    CurrencyMaskModule,
    RouterModule.forRoot(APP_ROUTES), ReactiveFormsModule
    
  ],
  providers: [UsuarioService, ObserverUtilsService, CaixaService, SaqueService, 
  {provide: LOCALE_ID, useValue: "pt-BR"}],

  bootstrap: [AppComponent]
})
export class AppModule { }
