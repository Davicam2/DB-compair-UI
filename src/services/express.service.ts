import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestService } from './rest.service';
import { RuntimeService } from './runtime.service';

@Injectable({
  providedIn: 'root'
})
export class ExpressService {

  mongoResponse$: BehaviorSubject<any> = new BehaviorSubject({});
  neoResponse$: BehaviorSubject<any> = new BehaviorSubject({});
  
  constructor(
    private rAPISvc:RestService,
    private configSvc:RuntimeService
    ) { }

  getMongoResponse(req:string){
    let request = req;

    this.rAPISvc.makeGetRequest(
      this.configSvc.getConfig().URIS.BASE.express + 
      this.configSvc.getConfig().URIS.SERVICE.MONGO.getTest,
      request
      ).subscribe(
        (data) => {
          this.mongoResponse$.next(data);
        }, 
        (err) => {
          console.error(err);
      })
  }

  getNeoResponse(req:string){
    let request = req;
    
    this.rAPISvc.makeGetRequest(
      this.configSvc.getConfig().URIS.BASE.express +
      this.configSvc.getConfig().URIS.SERVICE.NEO4J.getTest,
      request
    ).subscribe(
      (data) => {
        this.neoResponse$.next(data);
      }, 
      (err) => {
        console.error(err);
      }
    )
  }


}
