import { PoPageAction, PoTableAction, PoTableColumn, PoModalComponent } from '@po-ui/ng-components';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  public columns: Array<PoTableColumn>;
  public estoque: Array<any>;
  public actionsTable: Array<PoTableAction>;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor() {}

  ngOnInit(): void {
    this.columns = [
      { property: 'codigo', label: 'Código' },
      { property: 'descricao', label: 'Descrição' },
      { property: 'codFabr', label: 'Código do Fabricante' },
      { property: 'quantidade', label: 'Quantidade'},
      { property: 'unidade', label: 'Unidade de Atendimento'},
      {
        property: 'tipo',
        label: 'Tipo',
        type: 'subtitle',
        subtitles: [
          { value: 1, color: 'color-03', label: 'Medicamento', content: 'M' },
          { value: 2, color: 'color-10', label: 'Insumo', content: 'I' },
          { value: 3, color: 'color-07', label: 'Limpeza', content: 'L' },
          { value: 4, color: 'color-08', label: 'Material', content: 'M' },
          { value: 5, color: 'color-02', label: 'Equipamento', content: 'E' }
        ],
      }
    ];

    this.estoque = [
      {
        codigo: '0010222',
        descricao: 'CoronaVAC',
        codFabr: 'CVAC9901',
        quantidade: 300,
        unidade:'UBS Santana - Zona Norte',
        tipo:1
      },
      {
        codigo: '001000',
        descricao: 'Máscara N95 3M',
        codFabr: '3M09910',
        quantidade: 1000,
        unidade:'UBS Santana - Zona Norte',
        tipo:2
      },
      {
        codigo: '001002',
        descricao: 'Selozok 25mg AstraZeneca ',
        codFabr: 'ZCA098870',
        quantidade: 300,
        unidade:'UBS Santana - Zona Norte',
        tipo:1
      },
      {
        codigo: '003002',
        descricao: 'Alcool 70%',
        codFabr: 'ALC098870',
        quantidade: 50,
        unidade:'UBS Santana - Zona Norte',
        tipo:3
      },
      {
        codigo: '004002',
        descricao: 'Oxímetro G-TECH',
        codFabr: 'GTECH-20390',
        quantidade: 20,
        unidade:'UBS Santana - Zona Norte',
        tipo:4
      }
    ];

    this.actionsTable = [
      {
        action: ()=>this.poModal.open(),
        label: 'Visualizar'
      },
      {
        action: ()=>alert('texto'),
        label: 'Reservar',
      },
      {
        action: ()=>alert('texto'),
        label: 'Baixar'
      }
      ,
      {
        action: ()=>alert('texto'),
        label: 'Transferência '
      }
    ];
  }
}
