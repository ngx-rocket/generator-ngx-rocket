import { RequestOptionsArgs } from '@angular/http';

declare module '@angular/http/src/interfaces' {

  // Use this interface to extend requests options if needed
  export interface RequestOptionsArgs {
    skipErrorHandler?: boolean;
  }

}
