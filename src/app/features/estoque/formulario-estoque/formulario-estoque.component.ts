import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-estoque',
  templateUrl: './formulario-estoque.component.html',
  styleUrls: ['./formulario-estoque.component.css']
})
export class FormularioEstoqueComponent implements OnInit {

  public formEstoque: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formEstoque = this.formBuilder.group({
        codigo: ['0010222'],
        descricao: ['CoronaVAC'],
        codFabr: ['CVAC9901'],
        quantidade: [300],
        unidade:['UBS Santana - Zona Norte'],
        tipo:[1]
    });
  }

}
