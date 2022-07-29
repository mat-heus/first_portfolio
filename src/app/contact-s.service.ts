import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactSService {
  private api = 'https://mailthis.to/alias'

  constructor(private http: HttpClient) { }

  PostMessage(input: any){
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            response;
          }
        },
      (error: any) => {
        return error;
        }
      )
    )
  }
}
