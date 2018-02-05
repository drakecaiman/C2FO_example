import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesDisplayComponent } from './games-display.component';

describe('GamesDisplayComponent', () => {
  let component: GamesDisplayComponent;
  let fixture: ComponentFixture<GamesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
