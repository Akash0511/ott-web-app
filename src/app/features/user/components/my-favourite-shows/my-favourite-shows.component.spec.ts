import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouriteShowsComponent } from './my-favourite-shows.component';

describe('MyFavouriteShowsComponent', () => {
  let component: MyFavouriteShowsComponent;
  let fixture: ComponentFixture<MyFavouriteShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavouriteShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFavouriteShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
