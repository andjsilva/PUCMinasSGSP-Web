import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-atendimento',
  templateUrl: './formulario-atendimento.component.html',
  styleUrls: ['./formulario-atendimento.component.css']
})
export class FormularioAtendimentoComponent implements OnInit {

  public formAgendarConsulta: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.formAgendarConsulta = this.formBuilder.group({
      codigoPaciente: ["001000"],
      nomePaciente:["João da Silva"],
      cpfPaciente: ["315.562.456-08"],
      telefonePaciente: ["(11) 99252-3178"],
      atendEntrada: ["23/02/2020 10:40:00"],
      atendSaida: ["23/02/2020 11:20:00"],
      unidAtendimento: ["UBS Santana - Zona Norte"],
      tipoAtendimento: [1],
      observacao: ["Neurologista - Dr. Raul"],
    });
  }

}
