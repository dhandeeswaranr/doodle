import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ViewMessageDialogComponent } from '../view-message-dialog/view-message-dialog.component'
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  @Input() mailDataContent;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(event):void{
    console.log("epon", event)
    const dialogRef = this.dialog.open(ViewMessageDialogComponent, {
      width:'80%',
      height:'400px',
      data:event
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    })
  }
}
