import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWatchedShowsComponent } from './my-watched-shows.component';

describe('MyWatchedShowsComponent', () => {
  let component: MyWatchedShowsComponent;
  let fixture: ComponentFixture<MyWatchedShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWatchedShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWatchedShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
