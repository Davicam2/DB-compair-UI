import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.scss']
})
export class SwitchboardComponent implements OnInit {

  @Output() selections: EventEmitter<switchBoardOptions> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();
  _selections: switchBoardOptions = {
    queryType: 1
  }
  constructor() { }

  ngOnInit(): void {
    
  }
  queryTypeSelect( event){
    console.log(event);
    this._selections.queryType = event.value;
    this.valueChange();
  }

  valueChange(){
    this.selections.emit(this._selections);
  }
  submitAction(){
    this.submit.emit();
  }

}

export interface switchBoardOptions {
  queryType: number;
}
