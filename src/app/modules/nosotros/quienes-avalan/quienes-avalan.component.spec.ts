import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesAvalanComponent } from './quienes-avalan.component';

describe('QuienesAvalanComponent', () => {
  let component: QuienesAvalanComponent;
  let fixture: ComponentFixture<QuienesAvalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesAvalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesAvalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
