import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle the error here
      console.error('error occurred:', error);
      //throw error as per requirement
      return throwError(error);
    })
  );
};
