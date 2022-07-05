import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Show } from 'src/app/core/interfaces/show.model';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

@Component({
  selector: 'app-add-shows',
  templateUrl: './add-shows.component.html',
  styleUrls: ['./add-shows.component.scss']
})
export class AddShowsComponent implements OnInit {

  addShowForm!: FormGroup;
  showNameControl!: FormControl;
  showTitleControl!: FormControl;
  showLanguageControl!: FormControl;
  showGenreControl!: FormControl;
  showImdbRatingControl!: FormControl;
  isAvailableOnPrimeControl!: FormControl;
  showDescriptionControl!: FormControl;

  constructor(private showService: ShowsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private readonly translateService: TranslateService) {
  }

  ngOnInit() {
    this.showNameControl = new FormControl('', [Validators.required, Validators.minLength(4),
    Validators.pattern('[a-zA-Z ,]+')]);
    this.showTitleControl = new FormControl('', [Validators.required, Validators.minLength(4),
    Validators.pattern('[a-zA-Z ,]+')]);
    this.showLanguageControl = new FormControl('', [Validators.required]);
    this.showGenreControl = new FormControl('', [Validators.required]);
    this.showImdbRatingControl = new FormControl('', [Validators.required]);
    this.isAvailableOnPrimeControl = new FormControl('', [Validators.required]);
    this.showDescriptionControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ,]+')]);

    this.addShowForm = new FormGroup({
      name: this.showNameControl,
      title: this.showTitleControl,
      language: this.showLanguageControl,
      genre: this.showGenreControl,
      imdbRating: this.showImdbRatingControl,
      isAvailableOnPrime: this.isAvailableOnPrimeControl,
      description: this.showDescriptionControl
    });

  }

  onFormSubmit() {
    const newShow: Show = this.addShowForm.value;
    newShow.imgUrl = "/assets/images/show_img.png";
    this.showService.addShow(newShow).subscribe(
      data => {
        if (data === 'Show Already Exists.') {
          this.openSnackBar(this.translateService.instant('ADD_SHOW.SHOW_ALREADY_EXIST'),
            '', "danger-style");
          this.addShowForm.reset();
        } else {
          this.openSnackBar(this.translateService.instant('ADD_SHOW.SHOW_CREATED_SUCCESSFULLY'),
            '', "success-style");
          this.router.navigateByUrl('/shows');
        }
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

  onCancelClicked() {
    this.router.navigateByUrl('/shows');
  }
}
