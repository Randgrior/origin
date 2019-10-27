import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetService {
  constructor(private http: HttpClient) { }
  getName() {
    return this.http.get('api/result');
  }
}
