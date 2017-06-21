import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaqueListarComponent } from './saque-listar.component';

describe('SaqueListarComponent', () => {
  let component: SaqueListarComponent;
  let fixture: ComponentFixture<SaqueListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaqueListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaqueListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
