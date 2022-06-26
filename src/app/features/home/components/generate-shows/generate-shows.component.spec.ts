import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateShowsComponent } from './generate-shows.component';

describe('GenerateShowsComponent', () => {
  let component: GenerateShowsComponent;
  let fixture: ComponentFixture<GenerateShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
