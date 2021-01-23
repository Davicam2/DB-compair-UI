import { Component, Inject, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-connection-string-modal',
  templateUrl: './connection-string-modal.component.html',
  styleUrls: ['./connection-string-modal.component.scss']
})
export class ConnectionStringModalComponent implements OnInit, OnDestroy {

  @Input() modalSetting: modalType;
  modalConf = { 
    title: '',
  } 


  constructor(
    public dialogRef: MatDialogRef<ConnectionStringModalComponent>
    
    ) { }

  ngOnInit(): void {
    this.setModalState();
  }

  ngOnDestroy(){

  }

  setModalState(){
    switch(this.modalSetting){
      case modalType.mongoConnection :{
        this.modalConf.title = 'Mongo Connection Settings'
        break;
      }
      case modalType.neoConnection: {
        this.modalConf.title = 'Neo Connection Settings'
        break;
      }
    }
    
  }

}

export enum modalType{
  mongoConnection,
  neoConnection
}