import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowsService } from 'src/app/core/services/shows/shows.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {

  @Input()
  showId!: string;

  constructor(public dialog: MatDialog, private readonly showService: ShowsService) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '40%',
      data: { showId: this.showId, review: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.showService.addShowReview(this.showId, result);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<WriteReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
