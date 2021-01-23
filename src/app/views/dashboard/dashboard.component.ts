import { Component, OnInit } from '@angular/core';
import {Subscription, timer} from 'rxjs';
import { skip } from 'rxjs/operators';

import { ExpressService } from 'src/services/express.service';
import { RuntimeService } from 'src/services/runtime.service';
import { switchBoardOptions } from './switchboard/switchboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  neoTimer$: Subscription;
  mongoTimer$ : Subscription;

  mongoRequestDisplayValue: JSON;
  mongTimer = timer(1,1);
  neoTimer = timer(1,1);

  constructor(
    private configSvc: RuntimeService,
    private expSvc: ExpressService
    
    ) { }

  titles = {
    switchBoard: 'Switch Board',
    comsDisplayMongo: 'Mongo Response / Request',
    comsDisplayNeo: 'Neo Response / Request',
    resultsDisplay: 'Analytics',
    optionsDisplay: 'Settings'
  }

  mongoObject = {
    reqId: 0,
    request: '',
    response: '',
    responseTime: 0
  }

  neoObject = {
    reqId: 0,
    request: '',
    response: '',
    responseTime: 0
  }

  switchboardValue: switchBoardOptions = {
    queryType: 1
  }

  ngOnInit(): void {
    this.expSvc.mongoResponse$.pipe(skip(1)).subscribe((data) => {
      if(!data) return;
      this.mongoObject.response = data;
      this.mongoTimer$.unsubscribe()
    })
    this.expSvc.neoResponse$.pipe(skip(1)).subscribe((data) => {
      if(!data) return;
      this.neoObject.response = data;
      this.neoTimer$.unsubscribe();
    })
  }

  switchBoardChange(event: { queryType: number; }){
    //set mongo values on change
    for(let key of Object.keys(this.configSvc.getConfig().MONGO_SETTINGS.REQUESTS)){
      if(this.configSvc.getConfig().MONGO_SETTINGS.REQUESTS[key].id == Number(event.queryType)){
        this.mongoObject.reqId = event.queryType;
        this.mongoObject.request = this.configSvc.getConfig().MONGO_SETTINGS.REQUESTS[key].request;
      }
    }
    //set neo values on change
    for(let key of Object.keys(this.configSvc.getConfig().NEO_SETTINGS.REQUESTS)){
      if(this.configSvc.getConfig().NEO_SETTINGS.REQUESTS[key].id == Number(event.queryType)){
        this.neoObject.reqId = event.queryType;
        this.neoObject.request = this.configSvc.getConfig().NEO_SETTINGS.REQUESTS[key].request;
      }
    }
  }
  
  switchBoardSubmit(){

    this.mongoTimer$ = this.mongTimer.subscribe((data) => {
      this.mongoObject.responseTime = data;
    })

    this.expSvc.getMongoResponse(this.mongoObject.request);
  
    this.neoTimer$ = this.neoTimer.subscribe((data) => {
      this.neoObject.responseTime = data;
    })
    
    this.expSvc.getNeoResponse(this.neoObject.request);
  }

}
