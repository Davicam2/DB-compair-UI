import { Component, OnInit } from '@angular/core';
import {RuntimeService} from '../services/runtime.service';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularServer';

  constructor(
    private configSvc: RuntimeService,
    private rApiSvc: RestService
    ){}

  ngOnInit(){
    console.log(this.configSvc.getConfig());
  }
}
