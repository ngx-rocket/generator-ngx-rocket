import { RequestOptionsArgs } from '@angular/http';

// RequestOptionArgs is declared in a re-exported module, so we have to extend the original module to make it work
// properly (see  https://github.com/Microsoft/TypeScript/issues/13897)
declare module '@angular/http/src/interfaces' {

  // Use this interface to extend requests options if needed
  export interface RequestOptionsArgs {
    skipErrorHandler?: boolean;
  }

}
