import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConnectionStringModalComponent, modalType } from 'src/app/components/connection-string-modal/connection-string-modal.component';

@Component({
  selector: 'app-options-display',
  templateUrl: './options-display.component.html',
  styleUrls: ['./options-display.component.scss']
})
export class OptionsDisplayComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }


  setMongoConStr(){
    const dialogRef = this.dialog.open(ConnectionStringModalComponent,
        {panelClass: 'no-background'}
        // {width: '400px'}
      );
    const instance = dialogRef.componentInstance;

    instance.modalSetting = modalType.mongoConnection;

    dialogRef.afterClosed().subscribe(
      (result) => {

      }
    )
  }

  setNeoConStr(){
    const dialogRef = this.dialog.open(ConnectionStringModalComponent
      // {width: '400px'}
    );
    const instance = dialogRef.componentInstance;

    instance.modalSetting = modalType.neoConnection;

    dialogRef.afterClosed().subscribe(
      (result) => {

    }
  )
  }
}
