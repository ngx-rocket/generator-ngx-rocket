import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, Request, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    // Customize default options here if needed
    super(backend, defaultOptions);
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch(this.errorHandler.bind(this));
  }

  private errorHandler(response: Response, options?: RequestOptionsArgs): Observable<Response> {
    if (!options || !options.skipErrorHandler) {

    }
    return Observable.throw(response);
  }

}
