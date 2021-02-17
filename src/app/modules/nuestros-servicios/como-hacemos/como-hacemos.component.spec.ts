import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoHacemosComponent } from './como-hacemos.component';

describe('ComoHacemosComponent', () => {
  let component: ComoHacemosComponent;
  let fixture: ComponentFixture<ComoHacemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoHacemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoHacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
