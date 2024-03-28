import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSoloutionComponent } from './our-soloution.component';

describe('OurSoloutionComponent', () => {
  let component: OurSoloutionComponent;
  let fixture: ComponentFixture<OurSoloutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSoloutionComponent]
    });
    fixture = TestBed.createComponent(OurSoloutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
