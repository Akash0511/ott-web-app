import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginDetails } from 'src/app/core/interfaces/loginDetails.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private readonly matSnackBar: MatSnackBar) { }

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
        this.authService.logIn(user).subscribe(resp => {
          this.router.navigateByUrl('');
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

  showSnackBar(message: string, action: string, style: string): void {
    this.matSnackBar.open(message, action, {
      duration: 3000,
      panelClass: [style],
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }
}
