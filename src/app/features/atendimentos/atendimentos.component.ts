import { PoPageAction, PoTableAction, PoTableColumn, PoModalComponent } from '@po-ui/ng-components';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css'],
})
export class AtendimentosComponent implements OnInit {
  public columns: Array<PoTableColumn>;
  public atendimentos: Array<any>;
  public actionsTable: Array<PoTableAction>;
  public actionsPage:Array<PoPageAction> = [{label:'Incluir',icon:'po-icon-plus-circle',action:()=>alert('Incluir')}]

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
        codigo: '001000',
        nome: 'João da Silva',
        cpf: '315.562.456-08',
        tel: '(11) 99252-3178',
        entrada:'23/02/2020 10:40:00',
        saida:'23/02/2020 11:20:00',
        unidade:'UBS Santana - Zona Norte',
        tipo:1,
        obs:'Neurologista - Dr. Raul'
      },
      {
        codigo: '010019',
        nome: 'Maria Eduarda Botelho',
        cpf: '767.512.256-07',
        tel: '(11) 98928-3190',
        entrada:'23/03/2020 10:40:00',
        saida:'23/03/2020 11:20:00',
        unidade:'UBS Santana - Zona Norte',
        tipo:2,
        obs:'Papanicolau / Mamografia'
      }
      ,
      {
        codigo: '020019',
        nome: 'James José da Silva',
        cpf: '576.346.765-08',
        tel: '(11) 78409-2090',
        entrada:'26/03/2020 10:40:00',
        saida:' ',
        unidade:'Hospital Santana - Zona Norte',
        tipo:3,
        obs:'COVID-19 - UTI'
      },
    ];

    this.actionsTable = [
      {
        action: ()=>alert('texto'),
        label: 'Visualizar'
      },
      {
        action: ()=>this.poModal.open(),
        label: 'Confirmar'
      },
      {
        action: ()=>alert('texto'),
        label: 'Finalizar'
      },
      {
        action: ()=>alert('texto'),
        label: 'Cancelar'
      },
      {
        action: ()=>alert('texto'),
        label: 'Medicamentos'
      }

    ];
  }
}
