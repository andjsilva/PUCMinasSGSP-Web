import { ProdutosService } from './../../shared/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public colunas;

  public listaProdutos;

  constructor(private serviceProdutos:ProdutosService) {

  }

  ngOnInit() {

    this.colunas = this.getColumns();

    this.serviceProdutos.getProdutos().subscribe(
      teste => this.listaProdutos = teste
    );
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'idFabricante',type: 'string',label: 'Cód. Fabricante'},
      { property: 'tipo', label: 'Tipo', type: 'number' },
      { property: 'descricao', label: 'Descrição', type: 'string' },
      { property: 'fabricante', label: 'Fabricante', type: 'string' },
      { property: 'unidadeMedida', label: 'Unidade Medida', type: 'number' },
      { property: 'status', label: 'Status', type: 'number' }
    ];
  }
}
