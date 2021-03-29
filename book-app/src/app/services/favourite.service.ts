import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  port = '8082';
  api_endpoint = `http://localhost:${this.port}/api/v1/auth/fav/?userId=rd125`;

  constructor(private httpClient: HttpClient) {}
  getfavs() {
    return this.httpClient.get<Book[]>(this.api_endpoint);
  }
  // errhandler(error:HttpErrorResponse){
  //   return Observable.throw(error.message || 'Server Error');

  // }
}
