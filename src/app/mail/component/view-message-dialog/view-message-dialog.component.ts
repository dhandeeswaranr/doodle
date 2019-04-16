import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-view-message-dialog',
  templateUrl: './view-message-dialog.component.html',
  styleUrls: ['./view-message-dialog.component.scss']
})
export class ViewMessageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewMessageDialogComponent>, @Inject(MAT_DIALOG_DATA) public message: any,) { }

  ngOnInit() {
  }

}


  
