import { PoUiModule } from './../../shared/po-ui/po-ui.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentosComponent } from './atendimentos.component';
import { FormularioAtendimentoComponent } from './formulario-atendimento/formulario-atendimento.component';

const rotas: Routes = [{ path: '', component: AtendimentosComponent }];

@NgModule({
  declarations: [AtendimentosComponent, FormularioAtendimentoComponent],
  imports: [CommonModule,PoUiModule,RouterModule.forChild(rotas)],
})
export class AtendimentosModule {}
