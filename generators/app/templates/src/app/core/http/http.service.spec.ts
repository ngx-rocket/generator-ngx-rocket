import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import {
  BaseRequestOptions, ResponseOptions, Response, Request, RequestOptions, RequestMethod
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from './http.service';
import { HttpCacheService } from './http-cache.service';
import { environment } from '../../../environments/environment';
import { HttpCachePolicy } from './request-options-args';

describe('HttpService', () => {
  let httpService: HttpService;
  let httpCacheService: HttpCacheService;
  let mockBackend: MockBackend;
  let lastConnection: MockConnection;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        HttpCacheService,
        {
          provide: HttpService,
          useFactory: (backend: MockBackend,
                       defaultOptions: BaseRequestOptions,
                       cacheService: HttpCacheService) => {
            return new HttpService(backend, defaultOptions, cacheService);
          },
          deps: [MockBackend, BaseRequestOptions, HttpCacheService]
        }
      ]
    });
  });

  beforeEach(inject([
    HttpService,
    HttpCacheService,
    MockBackend
  ], (_httpService: HttpService,
      _httpCacheService: HttpCacheService,
      _mockBackend: MockBackend) => {
    httpService = _httpService;
    mockBackend = _mockBackend;
    httpCacheService = _httpCacheService;

    mockBackend.connections.subscribe((connection: MockConnection) => lastConnection = connection);
  }));

  afterEach(() => {
    mockBackend.verifyNoPendingRequests();
    httpCacheService.cleanCache();
  });

  describe('request', () => {
    it('should prepend environment.serverUrl to the request url', fakeAsync(() => {
      // Act
      httpService.request('/toto');
      lastConnection.mockRespond(new Response(new ResponseOptions()));
      tick();

      // Assert
      expect(lastConnection.request.url).toEqual(environment.serverUrl + '/toto');
    }));

    it('should prepend environment.serverUrl to the request object url property', fakeAsync(() => {
      // Act
      httpService.request(new Request(new RequestOptions({ url: '/toto' })));
      lastConnection.mockRespond(new Response(new ResponseOptions()));
      tick();

      // Assert
      expect(lastConnection.request.url).toEqual(environment.serverUrl + '/toto');
    }));

    it('should go through default error handler and rethrow an error', fakeAsync(() => {
      // Arrange
      const response = new Response(new ResponseOptions({ status: 500 }));

      // Act
      const request = httpService.request('/toto');
      lastConnection.mockError(response as any);
      tick();

      // Assert
      request.subscribe(() => {
        fail('should be an error');
      }, (error) => {
        expect(error.status).toBe(500);
      });
    }));

    it('should cache the request', fakeAsync(() => {
      // Arrange
      const response = new Response(new ResponseOptions({ body: 'toto' }));
      spyOn(httpCacheService, 'setCacheData').and.callThrough();

      // Act
      httpService.request('/toto', { cache: HttpCachePolicy.Always }).subscribe();
      lastConnection.mockRespond(response as any);
      tick();
      httpService.request('/toto', { cache: true }).subscribe();
      tick();

      // Assert
      expect(mockBackend.connectionsArray.length).toBe(1);
      expect(httpCacheService.setCacheData).toHaveBeenCalledTimes(1);
    }));

    it('should force request ignoring the cache', fakeAsync(() => {
      // Arrange
      const response = new Response(new ResponseOptions({ body: 'toto' }));
      spyOn(httpCacheService, 'setCacheData').and.callThrough();

      // Act
      httpService.request('/toto', { cache: true }).subscribe();
      lastConnection.mockRespond(response as any);
      tick();
      httpService.request('/toto', { cache: HttpCachePolicy.Update }).subscribe();
      lastConnection.mockRespond(response as any);
      tick();

      // Assert
      expect(mockBackend.connectionsArray.length).toBe(2);
      expect(httpCacheService.setCacheData).toHaveBeenCalledTimes(2);
    }));

    it('should not cache request', fakeAsync(() => {
      // Arrange
      const response = new Response(new ResponseOptions({ body: 'toto' }));
      spyOn(httpCacheService, 'setCacheData').and.callThrough();

      // Act
      httpService.request('/toto').subscribe();
      lastConnection.mockRespond(response as any);
      tick();
      httpService.request('/toto', { cache: false }).subscribe();
      lastConnection.mockRespond(response as any);
      tick();
      httpService.request('/toto', { cache: HttpCachePolicy.Never }).subscribe();
      lastConnection.mockRespond(response as any);
      tick();

      // Assert
      expect(mockBackend.connectionsArray.length).toBe(3);
      expect(httpCacheService.setCacheData).toHaveBeenCalledTimes(0);
    }));

    it('should cache the request and return a copy of the response', fakeAsync(() => {
      // Arrange
      const response = new Response(new ResponseOptions({ status: 200, body: 'toto' }));
      spyOn(httpCacheService, 'setCacheData').and.callThrough();
      httpService.request('/toto', { cache: true }).subscribe((res) => {
        // Modify the response object
        res.status = 204;
      });
      lastConnection.mockRespond(response as any);
      tick();

      // Act
      const request = httpService.request('/toto', { cache: true });
      tick();

      // Assert
      request.subscribe((res) => {
        expect(res.status).toBe(200);
        expect(mockBackend.connectionsArray.length).toBe(1);
        expect(httpCacheService.setCacheData).toHaveBeenCalledTimes(1);
      });
    }));
  });

  describe('get', () => {
    it('should call request with GET method', () => {
      // Prepare
      spyOn(httpService, 'request');

      // Act
      httpService.get('/toto');

      // Assert
      expect((<jasmine.Spy>httpService.request).calls.mostRecent().args)
        .toEqual(['/toto', { method: RequestMethod.Get }]);
    });
  });

  describe('post', () => {
    it('should call request with POST method and body', () => {
      // Prepare
      spyOn(httpService, 'request');

      // Act
      httpService.post('/toto', { tata: 123 });

      // Assert
      expect((<jasmine.Spy>httpService.request).calls.mostRecent().args)
        .toEqual(['/toto', { method: RequestMethod.Post, body: { tata: 123 } }]);
    });
  });

  describe('put', () => {
    it('should call request with PUT method and body', () => {
      // Prepare
      spyOn(httpService, 'request');

      // Act
      httpService.put('/toto', { tata: 123 });

      // Assert
      expect((<jasmine.Spy>httpService.request).calls.mostRecent().args)
        .toEqual(['/toto', { method: RequestMethod.Put, body: { tata: 123 } }]);
    });
  });

  describe('delete', () => {
    it('should call request with DELETE method', () => {
      // Prepare
      spyOn(httpService, 'request');

      // Act
      httpService.delete('/toto');

      // Assert
      expect((<jasmine.Spy>httpService.request).calls.mostRecent().args)
        .toEqual(['/toto', { method: RequestMethod.Delete }]);
    });
  });

  describe('patch', () => {
    it('should call request with PATCH method and body', () => {
      // Prepare
      spyOn(httpService, 'request');

      // Act
      httpService.patch('/toto', { tata: 123 });

      // Assert
      expect((<jasmine.Spy>httpService.request).calls.mostRecent().args)
        .toEqual(['/toto', { method: RequestMethod.Patch, body: { tata: 123 } }]);
    });
  });

  describe('head', () => {
    it('should call request with HEAD method', () => {
      // Prepare
      spyOn(httpService, 'request');

      // Act
      httpService.head('/toto');

      // Assert
      expect((<jasmine.Spy>httpService.request).calls.mostRecent().args)
        .toEqual(['/toto', { method: RequestMethod.Head }]);
    });
  });

  describe('options', () => {
    it('should call request with OPTIONS method', () => {
      // Prepare
      spyOn(httpService, 'request');

      // Act
      httpService.options('/toto');

      // Assert
      expect((<jasmine.Spy>httpService.request).calls.mostRecent().args)
        .toEqual(['/toto', { method: RequestMethod.Options }]);
    });
  });
});
