import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPrimeMembershipComponent } from './get-prime-membership.component';

describe('GetPrimeMembershipComponent', () => {
  let component: GetPrimeMembershipComponent;
  let fixture: ComponentFixture<GetPrimeMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPrimeMembershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPrimeMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
