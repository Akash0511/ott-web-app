import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeOffers } from 'src/app/core/interfaces/primeOffers.model';
import { PrimeOffersService } from 'src/app/core/services/prime-offers/prime-offers.service';

@Component({
  selector: 'app-add-prime-offers',
  templateUrl: './add-prime-offers.component.html',
  styleUrls: ['./add-prime-offers.component.scss']
})
export class AddPrimeOffersComponent implements OnInit {

  addPrimeOfferForm!: FormGroup;
  primeNameControl!: FormControl;
  primeDescriptionControl!: FormControl;
  primeDurationControl!: FormControl;
  primePriceControl!: FormControl;

  constructor(private primeOffersService: PrimeOffersService,
    private router: Router,
    private snackBar: MatSnackBar,
    private readonly translateService: TranslateService) {
  }

  ngOnInit() {
    this.primeNameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.primeDurationControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]);
    this.primePriceControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]);
    this.primeDescriptionControl = new FormControl('', []);

    this.addPrimeOfferForm = new FormGroup({
      name: this.primeNameControl,
      price: this.primePriceControl,
      durationInMonths: this.primeDurationControl,
      description: this.primeDescriptionControl
    });

  }

  onPrimeOfferFormSubmit() {
    const newOffer: PrimeOffers = this.addPrimeOfferForm.value;
    this.primeOffersService.addPrimeOffers(newOffer).subscribe(
      data => {
        this.openSnackBar(this.translateService.instant('ADD_PRIME_OFFER.PACKAGE_ADDED_SUCCESSFULLY'),
          '', "success-style");
        this.router.navigateByUrl('/shows');
      });
  }

  openSnackBar(message: string, action: string, style: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: [style],
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }

  getControlValidationClasses(control: FormControl): any {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }
}
