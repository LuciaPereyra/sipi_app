import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBedel } from './dashboard-bedel.component';

describe('DashboardBedel', () => {
  let component: DashboardBedel;
  let fixture: ComponentFixture<DashboardBedel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBedel]
    });
    fixture = TestBed.createComponent(DashboardBedel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
