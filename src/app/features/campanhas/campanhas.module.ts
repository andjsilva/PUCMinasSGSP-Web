import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhasComponent } from './campanhas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoUiModule } from './../../shared/po-ui/po-ui.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CampanhasComponent
  },
];

@NgModule({
  declarations: [CampanhasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PoUiModule,
    RouterModule.forChild(routes)
  ]
})
export class CampanhasModule{ }
