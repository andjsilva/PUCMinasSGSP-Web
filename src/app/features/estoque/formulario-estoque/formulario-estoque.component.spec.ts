import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstoqueComponent } from './formulario-estoque.component';

describe('FormularioEstoqueComponent', () => {
  let component: FormularioEstoqueComponent;
  let fixture: ComponentFixture<FormularioEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
