import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstnCalendarComponent } from './instn-calendar.component';

describe('InstnCalendarComponent', () => {
  let component: InstnCalendarComponent;
  let fixture: ComponentFixture<InstnCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstnCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstnCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
