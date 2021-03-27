import { Component, OnInit } from '@angular/core';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.component.html',
  styleUrls: ['./campanhas.component.scss'],
})
export class CampanhasComponent implements OnInit {
  public colunas;

  public campanhas: Array<any>;
  public actionsTable: Array<PoTableAction>;

  constructor() {

  }

  ngOnInit() {

    this.colunas = this.getColumns();

    this.campanhas = [
      {
        codigo: '0000010',
        descricao: 'Campanha de Vacinação COVID-19',
        inicio:'23/01/2021 10:40',
        fim:'31/12/2021 11:20',
        unidade:'UBS Santana - Zona Norte',
      },
      {
        codigo: '0000011',
        descricao: 'Novembro Azul',
        inicio:'01/11/2021 10:40',
        fim:'30/11/2021 11:20',
        unidade:'UBS Santana - Zona Norte',
      },
      {
        codigo: '0000012',
        descricao: 'São Paulo Sorridente',
        inicio:'01/03/2021 10:40',
        fim:'26/04/2021 11:20',
        unidade:'UBS Santana - Zona Norte',
      },
    ];

    this.actionsTable = [
      {
        action: ()=>alert('texto'),
        label: 'Visualizar'
      },
      {
        action: ()=>alert('texto'),
        label: 'Incluir',
      },
      {
        action: ()=>alert('texto'),
        label: 'Alterar'
      }
      ,
      {
        action: ()=>alert('texto'),
        label: 'Excluir '
      }
      ,
      {
        action: ()=>alert('texto'),
        label: 'Disparar '
      }
    ];

  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'codigo',type: 'string',label: 'Código'},
      { property: 'descricao', label: 'Descrição', type: 'string' },
      { property: 'inicio', label: 'Início', type: 'string' },
      { property: 'fim', label: 'Fim', type: 'string' },
      { property: 'unidade', label: 'Unidade de Atendimento', type: 'string' },
    ];
  }
}
