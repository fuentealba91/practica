import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPortalComponent } from './mi-portal.component';

describe('MiPortalComponent', () => {
  let component: MiPortalComponent;
  let fixture: ComponentFixture<MiPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
