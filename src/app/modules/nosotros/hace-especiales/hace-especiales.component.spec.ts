import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaceEspecialesComponent } from './hace-especiales.component';

describe('HaceEspecialesComponent', () => {
  let component: HaceEspecialesComponent;
  let fixture: ComponentFixture<HaceEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaceEspecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaceEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
