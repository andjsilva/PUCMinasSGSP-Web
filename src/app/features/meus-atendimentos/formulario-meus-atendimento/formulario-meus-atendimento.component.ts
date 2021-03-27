import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-meus-atendimento',
  templateUrl: './formulario-meus-atendimento.component.html',
  styleUrls: ['./formulario-meus-atendimento.component.css']
})
export class FormularioMeusAtendimentoComponent implements OnInit {

  public formAgendarConsulta: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.formAgendarConsulta = this.formBuilder.group({
      codigoPaciente: ["001039"],
      nomePaciente:["João da Silva"],
      cpfPaciente: ["315.562.456-08"],
      telefonePaciente: ["(11) 99252-3178"],
      atendEntrada: ["10/03/2021 10:40:00"],
      atendSaida: ["10/03/2021 11:20:00"],
      unidAtendimento: ["UBS Santana - Zona Norte"],
      tipoAtendimento: [2],
      observacao: ["Covid-19 anti-corpos"]

    });
  }

}
