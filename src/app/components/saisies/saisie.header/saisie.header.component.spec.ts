import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieHeaderComponent } from './saisie.header.component';

describe('SaisieHeaderComponent', () => {
  let component: SaisieHeaderComponent;
  let fixture: ComponentFixture<SaisieHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaisieHeaderComponent]
    });
    fixture = TestBed.createComponent(SaisieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
