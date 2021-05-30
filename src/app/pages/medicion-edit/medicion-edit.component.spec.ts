import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicionEditComponent } from './medicion-edit.component';

describe('MedicionEditComponent', () => {
  let component: MedicionEditComponent;
  let fixture: ComponentFixture<MedicionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
