import { PoPageAction, PoTableAction, PoTableColumn, PoModalComponent } from '@po-ui/ng-components';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './meus-atendimentos.component.html',
  styleUrls: ['./meus-atendimentos.component.css'],
})
export class MeusAtendimentosComponent implements OnInit {
  public columns: Array<PoTableColumn>;
  public atendimentos: Array<any>;
  public actionsTable: Array<PoTableAction>;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor() {}

  ngOnInit(): void {
    this.columns = [
      { property: 'codigo', label: 'Código' },
      { property: 'nome', label: 'Nome' },
      { property: 'cpf', label: 'CPF' },
      { property: 'tel', label: 'Telefone' },
      { property: 'entrada', label: 'Entrada'},
      { property: 'saida', label: 'Saida'},
      { property: 'unidade', label: 'Unidade' },
      {
        property: 'tipo',
        label: 'Tipo',
        type: 'subtitle',
        subtitles: [
          { value: 1, color: 'color-03', label: 'Consulta', content: 'C' },
          { value: 2, color: 'color-10', label: 'Exames', content: 'E' },
          { value: 3, color: 'color-07', label: 'Internação', content: 'I' },
        ],
      },
      { property: 'obs', label: 'Observações' },
    ];

    this.atendimentos = [
      {
        codigo: '000200',
        nome: 'João da Silva',
        cpf: '315.562.456-08',
        tel: '(11) 99252-3178',
        entrada:'23/10/2020 08:30',
        saida:'30/10/2020 15:00',
        unidade:'Dante Pazzanese de Cardiologia',
        tipo:3,
        obs:'Cirurgia do coração'
      },
      {
        codigo: '001000',
        nome: 'João da Silva',
        cpf: '315.562.456-08',
        tel: '(11) 99252-3178',
        entrada:'23/02/2020 10:40',
        saida:'23/02/2020 11:20',
        unidade:'UBS Santana - Zona Norte',
        tipo:1,
        obs:'Neurologista - Dr. Raul'
      },
      {
        codigo: '001039',
        nome: 'João da Silva',
        cpf: '315.562.456-08',
        tel: '(11) 99252-3178',
        entrada:'10/03/2021 10:40',
        saida:'10/03/2021 11:20s',
        unidade:'UBS Santana - Zona Norte',
        tipo:2,
        obs:'Covid-19 anti-corpos'
      },
    ];

    this.actionsTable = [
      {
        action: ()=>this.poModal.open(),
        label: 'Visualizar'
      },
      {
        action: ()=>this.poModal.open(),
        label: 'Imprimir'
      }

    ];
  }
}
