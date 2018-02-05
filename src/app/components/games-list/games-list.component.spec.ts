import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games-list.component';

describe('GamesComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
