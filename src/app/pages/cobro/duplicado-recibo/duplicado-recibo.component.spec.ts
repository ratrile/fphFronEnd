import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicadoReciboComponent } from './duplicado-recibo.component';

describe('DuplicadoReciboComponent', () => {
  let component: DuplicadoReciboComponent;
  let fixture: ComponentFixture<DuplicadoReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicadoReciboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicadoReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
