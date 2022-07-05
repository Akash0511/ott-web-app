import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/core/interfaces/user.model';
import { UserService } from 'src/app/core/services/user/user.service';
import ValidatePwd from '../../utils/validate_pwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  firstNameControl!: FormControl;
  lastNameControl!: FormControl;
  emailControl!: FormControl;
  phoneControl!: FormControl;
  passwordControl!: FormControl;
  confirmPasswordControl!: FormControl;

  constructor(private userService: UserService,
    private router: Router,
    private readonly translateService: TranslateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) {
  }

  imgUrl = '../../../../assets/images/loginLogo.png';

  ngOnInit() {
    this.firstNameControl = new FormControl('', [Validators.required, Validators.minLength(3),
    Validators.pattern('[a-zA-Z ,]+')]);

    this.lastNameControl = new FormControl('', [Validators.required, Validators.minLength(3),
    Validators.pattern('[a-zA-Z ,]+')]);

    this.emailControl = new FormControl('', [Validators.required, Validators.email]);

    this.phoneControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
    Validators.pattern('[0-9]+')]);

    this.passwordControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10),
    Validators.pattern('[a-zA-Z0-9 ,]+')]);

    this.confirmPasswordControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10),
    Validators.pattern('[a-zA-Z0-9 ,]+'),]);

    this.signupForm = this.formBuilder.group({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      userName: this.emailControl,
      phone: this.phoneControl,
      pwd: this.passwordControl,
      confirmPassword: this.confirmPasswordControl
    }, {
      validators: [ValidatePwd.match('pwd', 'confirmPassword')]
    });

  }

  onSignup() {
    delete this.signupForm.value.confirmPassword;
    const newUser = this.signupForm.value as User;
    newUser.role = 'user';
    newUser.isPrimeMember = false;
    this.userService.addUser(newUser).subscribe(
      data => {
        if (data === 'User Already Exists.') {
          this.showSnackBar(this.translateService.instant('SIGNUP.USER_ALREADY_EXIST'),
            '', "danger-style");
          this.signupForm.reset();
        } else {
          this.showSnackBar(this.translateService.instant('SIGNUP.USER_CREATED_SUCCESSFULLY'),
          '', "success-style");
          this.router.navigateByUrl('/auth/login');
        }
      }
    );
  }

  showSnackBar(message: string, action: string, style: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: [style],
      verticalPosition: "top", 
      horizontalPosition: "right"
    });
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  onCancelClicked() {
    this.router.navigateByUrl('/auth/login');
  }
}
