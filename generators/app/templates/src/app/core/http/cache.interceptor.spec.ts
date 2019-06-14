import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpResponse } from '@angular/common/http';

import { CacheInterceptor } from './cache.interceptor';
import { HttpCacheService } from './http-cache.service';

describe('CacheInterceptor', () => {
  let interceptorOptions: object | null = {};
  let httpCacheService: HttpCacheService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  function createInterceptor(_httpCacheService: HttpCacheService) {
    return new CacheInterceptor(_httpCacheService).configure(interceptorOptions);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpCacheService,
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: createInterceptor,
          deps: [HttpCacheService],
          multi: true
        }
      ]
    });
  });

  afterEach(() => {
    httpCacheService.cleanCache();
    httpMock.verify();
  });

  describe('with default configuration', () => {
    beforeEach(() => {
      interceptorOptions = null;
      http = TestBed.get(HttpClient);
      httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
      httpCacheService = TestBed.get(HttpCacheService);
    });

    it('should cache the request', () => {
      // Act
      http.get('/toto').subscribe(() => {
        // Assert
        const cachedData = httpCacheService.getCacheData('/toto');
        expect(cachedData).toBeDefined();
        expect(cachedData ? cachedData.body : null).toEqual('someData');
      });

      httpMock.expectOne({ url: '/toto' }).flush('someData');
    });

    it('should respond from the cache', () => {
      // Arrange
      httpCacheService.setCacheData('/toto', new HttpResponse({ body: 'cachedData' }));

      // Act
      http.get('/toto').subscribe(response => {
        // Assert
        expect(response).toEqual('cachedData');
      });

      httpMock.expectNone({ url: '/toto' });
    });

    it('should not cache the request in case of error', () => {
      // Act
      http.get('/toto').subscribe(
        () => {},
        () => {
          // Assert
          expect(httpCacheService.getCacheData('/toto')).toBeNull();
        }
      );

      httpMock.expectOne({}).flush(null, {
        status: 404,
        statusText: 'error'
      });
    });
  });

  describe('with update forced configuration', () => {
    beforeEach(() => {
      interceptorOptions = { update: true };
      http = TestBed.get(HttpClient);
      httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
      httpCacheService = TestBed.get(HttpCacheService);
    });

    afterEach(() => {
      httpCacheService.cleanCache();
      httpMock.verify();
    });

    it('should force cache update', () => {
      // Arrange
      httpCacheService.setCacheData('/toto', new HttpResponse({ body: 'oldCachedData' }));

      // Act
      http.get('/toto').subscribe(response => {
        // Assert
        expect(response).toEqual('newData');
      });

      httpMock.expectOne({ url: '/toto' }).flush('newData');
    });
  });
});
