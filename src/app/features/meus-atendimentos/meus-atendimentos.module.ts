import { PoUiModule } from './../../shared/po-ui/po-ui.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusAtendimentosComponent } from './meus-atendimentos.component';
import { FormularioMeusAtendimentoComponent } from './formulario-meus-atendimento/formulario-meus-atendimento.component';

const rotas: Routes = [{ path: '', component: MeusAtendimentosComponent }];

@NgModule({
  declarations: [MeusAtendimentosComponent, FormularioMeusAtendimentoComponent],
  imports: [CommonModule,PoUiModule,RouterModule.forChild(rotas)],
})
export class MeusAtendimentosModule {}
