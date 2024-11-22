import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBedelComponent } from './dashboard-bedel.component';

describe('DashboardBedelComponent', () => {
  let component: DashboardBedelComponent;
  let fixture: ComponentFixture<DashboardBedelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBedelComponent]
    });
    fixture = TestBed.createComponent(DashboardBedelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 

