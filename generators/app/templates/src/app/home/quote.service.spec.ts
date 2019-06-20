import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule, HttpCacheService } from '@app/core';
import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let quoteService: QuoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpCacheService,
        QuoteService
      ]
    });

    quoteService = TestBed.get(QuoteService);
    httpMock = TestBed.get(HttpTestingController);

    const htttpCacheService = TestBed.get(HttpCacheService);
    htttpCacheService.cleanCache();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getRandomQuote', () => {
    it('should return a random Chuck Norris quote', () => {
      // Arrange
      const mockQuote = { value: 'a random quote' };

      // Act
      const randomQuoteSubscription = quoteService.getRandomQuote({ category: 'toto' });

      // Assert
      randomQuoteSubscription.subscribe((quote: string) => {
        expect(quote).toEqual(mockQuote.value);
      });
      httpMock.expectOne({}).flush(mockQuote);
    });

    it('should return a string in case of error', () => {
      // Act
      const randomQuoteSubscription = quoteService.getRandomQuote({ category: 'toto' });

      // Assert
      randomQuoteSubscription.subscribe((quote: string) => {
        expect(typeof quote).toEqual('string');
        expect(quote).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error'
      });
    });
  });
});
