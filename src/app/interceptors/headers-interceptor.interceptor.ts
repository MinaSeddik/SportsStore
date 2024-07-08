import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Adding HTTP Header to the request', req);
  const GUID = 'f4179b26-21ac-432c-bcd8-cb4bc6e50981'
  const modifiedRequest = req.clone({
    setHeaders:{
      GUID
    }
  })
  return next(modifiedRequest);
};
