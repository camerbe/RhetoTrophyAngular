import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieHomeComponent } from './saisie.home.component';

describe('SaisieHomeComponent', () => {
  let component: SaisieHomeComponent;
  let fixture: ComponentFixture<SaisieHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaisieHomeComponent]
    });
    fixture = TestBed.createComponent(SaisieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
