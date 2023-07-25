import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventteamlistComponent } from './eventteamlist.component';

describe('EventteamlistComponent', () => {
  let component: EventteamlistComponent;
  let fixture: ComponentFixture<EventteamlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventteamlistComponent]
    });
    fixture = TestBed.createComponent(EventteamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
