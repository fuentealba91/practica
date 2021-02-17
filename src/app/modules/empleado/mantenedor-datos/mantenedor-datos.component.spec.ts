import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorDatosComponent } from './mantenedor-datos.component';

describe('MantenedorDatosComponent', () => {
  let component: MantenedorDatosComponent;
  let fixture: ComponentFixture<MantenedorDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
