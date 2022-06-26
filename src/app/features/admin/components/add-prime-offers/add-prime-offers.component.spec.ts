import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrimeOffersComponent } from './add-prime-offers.component';

describe('AddPrimeOffersComponent', () => {
  let component: AddPrimeOffersComponent;
  let fixture: ComponentFixture<AddPrimeOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrimeOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrimeOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
