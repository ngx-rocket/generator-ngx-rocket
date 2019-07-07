import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';

import { HttpCacheService, HttpCacheEntry } from './http-cache.service';

const cachePersistenceKey = 'httpCache';

describe('HttpCacheService', () => {
  let httpCacheService: HttpCacheService;
  let response: HttpResponse<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCacheService]
    });

    // Start fresh
    window.sessionStorage.removeItem(cachePersistenceKey);
    window.localStorage.removeItem(cachePersistenceKey);

    httpCacheService = TestBed.get(HttpCacheService);

    response = new HttpResponse({ body: 'data' });
  });

  afterEach(() => {
    httpCacheService.cleanCache();
  });

  describe('setCacheData', () => {
    it('should set cache data', () => {
      // Act
      httpCacheService.setCacheData('/popo', response);

      // Assert
      expect(httpCacheService.getCacheData('/popo')).toEqual(response);
    });

    it('should replace existing data', () => {
      // Arrange
      const newResponse = new HttpResponse({ body: 'new data' });

      // Act
      httpCacheService.setCacheData('/popo', response);
      httpCacheService.setCacheData('/popo', newResponse);

      // Assert
      expect(httpCacheService.getCacheData('/popo')).toEqual(newResponse);
    });

    it('should set cache date correctly', () => {
      // Act
      const date = new Date(123);
      httpCacheService.setCacheData('/popo', response, date);
      httpCacheService.setCacheData('/hoho', response);

      // Assert
      expect((httpCacheService.getHttpCacheEntry('/popo') as HttpCacheEntry).lastUpdated).toBe(date);
      expect((httpCacheService.getHttpCacheEntry('/hoho') as HttpCacheEntry).lastUpdated).not.toBe(date);
    });
  });

  describe('getCacheData', () => {
    it('should return null if no cache', () => {
      expect(httpCacheService.getCacheData('/hoho')).toBe(null);
    });

    it('should return cached data if exists', () => {
      // Act
      httpCacheService.setCacheData('/hoho', response);

      // Assert
      expect(httpCacheService.getCacheData('/hoho')).toEqual(response);
    });

    it('should return cached data with url parameters if exists', () => {
      // Act
      httpCacheService.setCacheData('/hoho?pif=paf', response);

      // Assert
      expect(httpCacheService.getCacheData('/hoho?pif=paf')).toEqual(response);
    });
  });

  describe('getHttpCacheEntry', () => {
    it('should return null if no cache', () => {
      expect(httpCacheService.getHttpCacheEntry('/hoho')).toBe(null);
    });

    it('should return cached data date  if exists', () => {
      // Arrange
      const date = new Date(123);

      // Act
      httpCacheService.setCacheData('/hoho', response, date);
      const entry = httpCacheService.getHttpCacheEntry('/hoho') as HttpCacheEntry;

      // Assert
      expect(entry).not.toBeNull();
      expect(entry.lastUpdated).toEqual(date);
      expect(entry.data).toEqual(response);
    });
  });

  describe('clearCacheData', () => {
    it('should clear existing cache data', () => {
      // Set cache
      httpCacheService.setCacheData('/hoho', response);
      expect(httpCacheService.getCacheData('/hoho')).toEqual(response);

      // Clear cache
      httpCacheService.clearCache('/hoho');
      expect(httpCacheService.getCacheData('/hoho')).toBe(null);
    });

    it('should do nothing if no cache exists', () => {
      expect(httpCacheService.getCacheData('/lolo')).toBe(null);
      httpCacheService.clearCache('/hoho');
      expect(httpCacheService.getCacheData('/lolo')).toBe(null);
    });
  });

  describe('cleanCache', () => {
    it('should clear all cache if no date is specified', () => {
      // Set cache
      httpCacheService.setCacheData('/hoho', response);
      httpCacheService.setCacheData('/popo', response);
      expect(httpCacheService.getCacheData('/hoho')).toBe(response);
      expect(httpCacheService.getCacheData('/popo')).toBe(response);

      // Clean cache
      httpCacheService.cleanCache();
      expect(httpCacheService.getCacheData('/hoho')).toBe(null);
      expect(httpCacheService.getCacheData('/popo')).toBe(null);
    });

    it('should clear existing since specified date', () => {
      // Set cache
      httpCacheService.setCacheData('/hoho', response);
      expect(httpCacheService.getCacheData('/hoho')).toBe(response);

      // Clean cache
      httpCacheService.cleanCache(new Date());
      expect(httpCacheService.getCacheData('/hoho')).toBe(null);
    });

    it('should not affect cache entries newer than specified date', () => {
      // Set cache
      httpCacheService.setCacheData('/hoho', response);
      expect(httpCacheService.getCacheData('/hoho')).toBe(response);

      // Clean cache
      const date = new Date();
      httpCacheService.setCacheData('/lolo', response, new Date(date.getTime() + 10));
      httpCacheService.cleanCache(date);

      // Assert
      expect(httpCacheService.getCacheData('/hoho')).toBe(null);
      expect(httpCacheService.getCacheData('/lolo')).toBe(response);
    });
  });

  describe('setPersistence', () => {
    beforeEach(() => {
      httpCacheService.setPersistence();
      httpCacheService.cleanCache = jasmine.createSpy('cleanCache');
    });

    it('should clear previous cache data when persistence value change', () => {
      httpCacheService.setPersistence('local');
      expect(httpCacheService.cleanCache).toHaveBeenCalledWith();
    });

    it('should persist cache to local storage', () => {
      expect(localStorage.getItem(cachePersistenceKey)).toBeNull();

      httpCacheService.setPersistence('local');
      httpCacheService.setCacheData('/hoho', response);

      expect(localStorage.getItem(cachePersistenceKey)).not.toBeNull();
    });

    it('should persist cache to session storage', () => {
      expect(sessionStorage.getItem(cachePersistenceKey)).toBeNull();

      httpCacheService.setPersistence('session');
      httpCacheService.setCacheData('/hoho', response);

      expect(sessionStorage.getItem(cachePersistenceKey)).not.toBeNull();
    });
  });
});
