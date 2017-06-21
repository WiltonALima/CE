import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaqueCadastrarComponent } from './saque-cadastrar.component';

describe('SaqueCadastrarComponent', () => {
  let component: SaqueCadastrarComponent;
  let fixture: ComponentFixture<SaqueCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaqueCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaqueCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
