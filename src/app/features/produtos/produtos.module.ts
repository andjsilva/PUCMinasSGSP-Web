import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoUiModule } from './../../shared/po-ui/po-ui.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent
  },
];

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PoUiModule,
    RouterModule.forChild(routes)
  ]
})
export class ProdutosModule { }
