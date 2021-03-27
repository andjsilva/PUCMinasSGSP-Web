import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMeusAtendimentoComponent } from './formulario-meus-atendimento.component';

describe('FormularioAtendimentoComponent', () => {
  let component: FormularioMeusAtendimentoComponent;
  let fixture: ComponentFixture<FormularioMeusAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioMeusAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMeusAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
