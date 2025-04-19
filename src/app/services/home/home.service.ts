import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base/base.service';

@Injectable()
export class HomeService extends BaseService {

  constructor(http: HttpClient) {
      super(http);
  }

  public getData(): Observable<string> {
    const url = `${this.baseUrl}helloWorld`;
    console.log('url: ' + url);

    return this.http.get<string>(url).pipe(catchError(this.handleError));
  }
}