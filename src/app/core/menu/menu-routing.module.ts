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
      {
        path: 'campanhas',
        loadChildren: () =>
          import('../../features/campanhas/campanhas.module').then(
            (m) => m.CampanhasModule
          ),
      },


      {
        path: 'estoque',
        loadChildren: () =>
          import('../../features/estoque/estoque.module').then(
            (m) => m.EstoqueModule
          ),
      },
      {
        path: 'meusAtendimentos',
        loadChildren: () =>
          import('../../features/meus-atendimentos/meus-atendimentos.module').then(
            (m) => m.MeusAtendimentosModule
          ),
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
