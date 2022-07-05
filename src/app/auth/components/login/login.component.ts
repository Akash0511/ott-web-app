import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginDetails } from 'src/app/core/interfaces/loginDetails.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaintainStateService } from 'src/app/core/services/maintain-state/maintain-state.service';
import { FavouriteShows } from 'src/app/core/interfaces/favourite.model';
import { StateData } from 'src/app/core/interfaces/state-data.model';
import { FavouriteShowsService } from 'src/app/core/services/favourite-shows/favourite-shows.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  previousUrl = '';

  invalidCredentialmessage!: string;

  loginForm!: FormGroup;

  emailControl!: FormControl;
  passwordControl!: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    private readonly userService: UserService,
    private readonly translateService: TranslateService,
    private readonly matSnackBar: MatSnackBar,
    private readonly favShowService: FavouriteShowsService,
    private readonly maintainStateService: MaintainStateService) { }

  imgUrl = '../../../../assets/images/loginLogo.png';

  ngOnInit(): void {

    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.passwordControl = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  onLogin(): void {
    const user: LoginDetails = this.loginForm.value as LoginDetails;
    this.userService.getUserDetail(user.email, user.password).subscribe(response => {
      if (response !== undefined) {
        this.authService.logIn(response).subscribe(resp => {
          const navResp = this.maintainStateService.getStateAction();
          if (navResp.navigationUrl !== '' && navResp.showId !== '') {
            if (navResp.markShowAsWatched) {
              this.favShowService.markShowAsWatched(this.getFavOrWatchedObj(navResp)).subscribe(resp => {
                this.router.navigateByUrl(navResp.navigationUrl);
                this.maintainStateService.resetStateAction();
              });
            } else {
              this.favShowService.markShowAsFav(this.getFavOrWatchedObj(navResp)).subscribe(resp => {
                this.router.navigateByUrl(navResp.navigationUrl);
                this.maintainStateService.resetStateAction();
              });
            }
          } else {
            this.router.navigateByUrl('/movies');
          }
        });
      } else {
        this.showSnackBar(this.translateService.instant('LOGIN.INVALID_CREDENTIAL_MESSAGE'),
          '', "danger-style");
        this.loginForm.reset();
      }
    });
  }

  getControlValidationClasses(control: FormControl): any {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  getFavOrWatchedObj(resp: StateData): FavouriteShows {
    return resp.markShowAsWatched ? {
      userId: this.authService.getUserId(),
      showId: resp.showId,
      isMarkedAsFavorite: false,
      isMarkedAsWatched: true
    } : {
      userId: this.authService.getUserId(),
      showId: resp.showId,
      isMarkedAsFavorite: true,
      isMarkedAsWatched: false
    }
  }

  showSnackBar(message: string, action: string, style: string): void {
    this.matSnackBar.open(message, action, {
      duration: 3000,
      panelClass: [style],
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }
}
