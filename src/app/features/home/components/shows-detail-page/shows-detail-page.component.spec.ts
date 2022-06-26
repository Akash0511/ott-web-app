import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsDetailPageComponent } from './shows-detail-page.component';

describe('ShowsDetailPageComponent', () => {
  let component: ShowsDetailPageComponent;
  let fixture: ComponentFixture<ShowsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
