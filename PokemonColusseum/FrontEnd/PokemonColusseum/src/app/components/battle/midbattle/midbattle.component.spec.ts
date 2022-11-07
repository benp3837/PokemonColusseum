import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidbattleComponent } from './midbattle.component';

describe('MidbattleComponent', () => {
  let component: MidbattleComponent;
  let fixture: ComponentFixture<MidbattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidbattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidbattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
