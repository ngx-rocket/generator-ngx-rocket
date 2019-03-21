import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

import { HttpCacheService } from './http-cache.service';

/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  private forceUpdate = false;

  constructor(private httpCacheService: HttpCacheService) { }

  /**
   * Configures interceptor options
   * @param options If update option is enabled, forces request to be made and updates cache entry.
   * @return The configured instance.
   */
  configure(options?: { update?: boolean } | null): CacheInterceptor {
    const instance = new CacheInterceptor(this.httpCacheService);
    if (options && options.update) {
      instance.forceUpdate = true;
    }
    return instance;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    return new Observable((subscriber: Subscriber<HttpEvent<any>>) => {
      const cachedData = this.forceUpdate ? null : this.httpCacheService.getCacheData(request.urlWithParams);
      if (cachedData !== null) {
        // Create new HttpResponse to be restored
        const data = {
          body: cachedData.body,
          headers: new HttpHeaders({ ...cachedData.headers }),
          status: cachedData.status,
          statusText: cachedData.statusText,
          url: cachedData.url
        };
        subscriber.next(new HttpResponse(data));
        subscriber.complete();
      } else {
        next.handle(request)
          .subscribe(
            event => {
              if (event instanceof HttpResponse) {
                // Convert HttpHeaders in an object
                const headers = event.headers
                  .keys()
                  .reduce((accumulator: any, key: any) => ({ ...accumulator, [key]: event.headers.get(key) }), {});

                // Create a new HttpResponse to be cached
                const data = {
                  body: event.body,
                  headers: headers,
                  status: event.status,
                  statusText: event.statusText,
                  url: event.url
                } as HttpResponse<any>;

                this.httpCacheService.setCacheData(request.urlWithParams, data);
              }
              subscriber.next(event);
            },
            error => subscriber.error(error),
            () => subscriber.complete()
          );
      }
    });
  }

}
