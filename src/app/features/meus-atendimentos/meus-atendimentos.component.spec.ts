import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAtendimentosComponent } from './meus-atendimentos.component';

describe('MeusAtendimentosComponent', () => {
  let component: MeusAtendimentosComponent;
  let fixture: ComponentFixture<MeusAtendimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAtendimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
