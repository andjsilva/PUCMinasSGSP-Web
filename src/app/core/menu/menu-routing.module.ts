import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'atendimentos',
        loadChildren: () =>
          import('../../features/atendimentos/atendimentos.module').then(
            (m) => m.AtendimentosModule
          ),
      },
      {
        path: 'produtos',
        loadChildren: () =>
          import('../../features/produtos/produtos.module').then(
            (m) => m.ProdutosModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
