import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


import { ExpressService } from 'src/services/express.service';


@Component({
  selector: 'app-communication-display',
  templateUrl: './communication-display.component.html',
  styleUrls: ['./communication-display.component.scss']
})
export class CommunicationDisplayComponent implements OnInit,OnChanges {
  @Input() activeRequest: string;
  @Input() activeResponse: string;

  _request: string = '';
  constructor( private expSvc: ExpressService) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.activeRequest){
      
    }
    if(changes.activeResponse){
      if(!changes.activeResponse.currentValue) return;
      
      this.activeResponse = JSON.parse(JSON.stringify(this.activeResponse, undefined, 4));
      //this.activeResponse.replace('\n','<br>');
    }
  }

}
