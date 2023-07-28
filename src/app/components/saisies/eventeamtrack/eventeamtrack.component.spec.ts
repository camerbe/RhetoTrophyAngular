import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventeamtrackComponent } from './eventeamtrack.component';

describe('EventeamtrackComponent', () => {
  let component: EventeamtrackComponent;
  let fixture: ComponentFixture<EventeamtrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventeamtrackComponent]
    });
    fixture = TestBed.createComponent(EventeamtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
