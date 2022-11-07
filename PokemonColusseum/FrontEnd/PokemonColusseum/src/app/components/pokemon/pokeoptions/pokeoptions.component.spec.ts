import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeoptionsComponent } from './pokeoptions.component';

describe('PokeoptionsComponent', () => {
  let component: PokeoptionsComponent;
  let fixture: ComponentFixture<PokeoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeoptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
