import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImdbRatingComponent } from './imdb-rating.component';

describe('ImdbRatingComponent', () => {
  let component: ImdbRatingComponent;
  let fixture: ComponentFixture<ImdbRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbRatingComponent ],
      imports: [NgbModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
