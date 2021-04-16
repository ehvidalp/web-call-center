import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor() {}

  handleError(error: HttpErrorResponse) {
    let responseMessage: string;
    if (error.error instanceof ErrorEvent)
      responseMessage = error.error.message;
    else responseMessage = error.message;
    return throwError(responseMessage);
  }
}
