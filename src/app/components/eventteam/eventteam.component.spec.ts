import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventteamComponent } from './eventteam.component';

describe('EventteamComponent', () => {
  let component: EventteamComponent;
  let fixture: ComponentFixture<EventteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventteamComponent]
    });
    fixture = TestBed.createComponent(EventteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
