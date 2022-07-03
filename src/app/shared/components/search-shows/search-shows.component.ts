import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.scss']
})
export class SearchShowsComponent implements OnInit {

  @Output() searchText: EventEmitter<string> = new EventEmitter();

  searchForm!: FormGroup;

  searchShowNameControl!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.searchShowNameControl = new FormControl('', [Validators.minLength(1)]);

    this.searchForm = new FormGroup({
      searchShowName: this.searchShowNameControl
    });
  }

  getControlValidationClasses(control: FormControl): any {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  searchShowByName(searchString: string): void {
    this.searchText.emit(searchString);
  }

  onSearchSubmit(): void {
    this.searchText.emit(this.searchForm.value.searchName);
  }

}
