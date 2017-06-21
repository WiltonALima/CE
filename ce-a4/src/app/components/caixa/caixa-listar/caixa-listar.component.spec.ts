import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaListarComponent } from './caixa-listar.component';

describe('CaixaListarComponent', () => {
  let component: CaixaListarComponent;
  let fixture: ComponentFixture<CaixaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
