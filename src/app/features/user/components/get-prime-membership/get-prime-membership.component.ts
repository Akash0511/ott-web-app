import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeOffers } from 'src/app/core/interfaces/primeOffers.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { PrimeOffersService } from 'src/app/core/services/prime-offers/prime-offers.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-get-prime-membership',
  templateUrl: './get-prime-membership.component.html',
  styleUrls: ['./get-prime-membership.component.scss']
})
export class GetPrimeMembershipComponent implements OnInit {

  primeOffers: PrimeOffers[] = [];

  constructor(private readonly route: ActivatedRoute,
    private readonly authService: AuthService,
    private readonly userService: UserService, private readonly router: Router,
    private readonly translateService: TranslateService,
    private readonly matSnackBar: MatSnackBar,
    private readonly primeOfferService: PrimeOffersService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data : any) => {
      this.primeOffers = data.primeOffersList;
    });
    this.primeOfferService.getPrimeOffers().subscribe(data =>{
      this.primeOffers = data;
    })
  }

  optPrimeOffers() {
    this.authService.saveUserPrime();
    this.userService.userPrimeStatusUpdation(this.authService.getUserId());
    this.openSnackBar(this.translateService.instant('TAKE_PRIME.SUCCESSFULL'),
      '', "success-style");
    this.router.navigateByUrl('/shows');
  }
  openSnackBar(message: string, action: string, style: string): void {
    this.matSnackBar.open(message, action, {
      duration: 3000,
      panelClass: [style],
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }
}
