import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menus: Array<PoMenuItem>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menus = this.defineMenu();
  }

  defineMenu(): Array<PoMenuItem> {
    return [
      {
        label: 'Home', action: () => {
          this.router.navigate(['']);
        }, icon: 'po-icon-home',
        shortLabel: 'Home',
      },
      {
        label: 'Cadastros', link: 'cadastros', icon: 'po-icon po-icon-plus',
        shortLabel: 'Cadastros',
        subItems: [
          {
            label: 'Produtos', action: () => {
              this.router.navigate(['produtos']);
            }, shortLabel: 'Produtos', icon: 'po-icon po-icon-plus'
          },
          {
            label: 'Campanhas', action: () => {
              this.router.navigate(['campanhas']);
            }, shortLabel: 'Campanhas', icon: 'po-icon po-icon-plus'
          }
        ]
      },
      {
        label: 'Consultas', link: 'notifications', icon: 'po-icon-calendar',
        shortLabel: 'Consultas',
        subItems: [
          {
            label: 'Atendimentos', action: () => {
              this.router.navigate(['atendimentos']);
            }, shortLabel: 'Atendimentos', icon: 'po-icon-clock'
          },
          {
            label: 'Estoque de Medicamentos', action: () => {
              this.router.navigate(['estoqueMedicamentos']);
            }, shortLabel: 'Medicamentos', icon: 'po-icon-clock'
          },
          {
            label: 'Meus Atendimentos', action: () => {
              this.router.navigate(['meusAtendimentos']);
            }, shortLabel: 'Atendimentos', icon: 'po-icon-clock'
          }
        ]
      }
    ];
  }

}
