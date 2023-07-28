import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtrackComponent } from './eventtrack.component';

describe('EventtrackComponent', () => {
  let component: EventtrackComponent;
  let fixture: ComponentFixture<EventtrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventtrackComponent]
    });
    fixture = TestBed.createComponent(EventtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
