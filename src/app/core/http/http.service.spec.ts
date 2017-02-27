import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { BaseRequestOptions, ResponseOptions, Response, Request, RequestOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from './http.service';
import { HttpCacheService } from './http-cache.service';
import { environment } from '../../../environments/environment';

describe('HttpService', () => {
  let httpService: HttpService;
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
                       httpCacheService: HttpCacheService) => {
            return new HttpService(backend, defaultOptions, httpCacheService);
          },
          deps: [MockBackend, BaseRequestOptions, HttpCacheService]
        }
      ]
    });
  });

  beforeEach(inject([
    HttpService,
    MockBackend
  ], (_httpService: HttpService,
      _mockBackend: MockBackend) => {
    httpService = _httpService;
    mockBackend = _mockBackend;

    mockBackend.connections.subscribe((connection: MockConnection) => lastConnection = connection);
  }));

  afterEach(() => {
    mockBackend.verifyNoPendingRequests();
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
