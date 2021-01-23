import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../interfaces/global';

@Injectable()
export class RuntimeService {
  private conf: appConfig;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.conf = data as appConfig;
      });
  }

  getConfig() {
    return this.conf;
  }
}
