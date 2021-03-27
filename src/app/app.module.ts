import { MeusAtendimentosModule } from './features/meus-atendimentos/meus-atendimentos.module';
import { EstoqueModule } from './features/estoque/estoque.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AtendimentosModule } from './features/atendimentos/atendimentos.module';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    CoreModule,
    AtendimentosModule,
    EstoqueModule,
    MeusAtendimentosModule,
    PoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
