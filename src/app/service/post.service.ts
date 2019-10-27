import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }
  postData(alpha: number,
           beta: number,
           d1: number[],
           d2: number[],
           delta1: number,
           delta2: number,
           eps: number,
           x0: number) {
    const requestBody = {alpha: alpha,
      beta: beta,
      d1: d1,
      d2: d2,
      delta1: delta1,
      delta2: delta2,
      eps: eps,
      x0: x0};
    return this.http.post('api/result', requestBody);
  }
}
