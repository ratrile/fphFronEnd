import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboImprimirComponent } from './recibo-imprimir.component';

describe('ReciboImprimirComponent', () => {
  let component: ReciboImprimirComponent;
  let fixture: ComponentFixture<ReciboImprimirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciboImprimirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboImprimirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
