import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventteamhomeComponent } from './eventteamhome.component';

describe('EventteamhomeComponent', () => {
  let component: EventteamhomeComponent;
  let fixture: ComponentFixture<EventteamhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventteamhomeComponent]
    });
    fixture = TestBed.createComponent(EventteamhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
