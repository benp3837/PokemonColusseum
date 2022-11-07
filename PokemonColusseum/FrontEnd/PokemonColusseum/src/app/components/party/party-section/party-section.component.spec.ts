import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySectionComponent } from './party-section.component';

describe('PartySectionComponent', () => {
  let component: PartySectionComponent;
  let fixture: ComponentFixture<PartySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
