import { EstoqueComponent } from './estoque.component';
import { PoUiModule } from '../../shared/po-ui/po-ui.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioEstoqueComponent} from './formulario-estoque/formulario-estoque.component'


const rotas: Routes = [{ path: '', component: EstoqueComponent }];

@NgModule({
  declarations: [EstoqueComponent,FormularioEstoqueComponent],
  imports: [CommonModule,PoUiModule,RouterModule.forChild(rotas)],
})
export class EstoqueModule {}
