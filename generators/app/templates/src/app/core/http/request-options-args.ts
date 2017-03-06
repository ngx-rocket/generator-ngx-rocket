import { RequestOptionsArgs } from '@angular/http';

/**
 * Cache policy for HTTP requests.
 * With the value 'Never' the request is always made and the cache is not used.
 * With the value 'Always' the request result is fetched from cache if possible, or the request is made and cached.
 * If the value 'Update' is used, a request will be forced and the cache entry updated.
 */
export enum HttpCachePolicy {
  Never = <any>false,
  Always = <any>true,
  Update = <any>'update'
}

// RequestOptionArgs is declared in a re-exported module, so we have to extend the original module to make it work
// properly (see  https://github.com/Microsoft/TypeScript/issues/13897)
declare module '@angular/http/src/interfaces' {

  // Use this interface to extend requests options if needed
  export interface RequestOptionsArgs {
    cache?: boolean|HttpCachePolicy;
    skipErrorHandler?: boolean;
  }

}
