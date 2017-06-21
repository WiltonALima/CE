import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaCadastrarComponent } from './caixa-cadastrar.component';

describe('CaixaCadastrarComponent', () => {
  let component: CaixaCadastrarComponent;
  let fixture: ComponentFixture<CaixaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
