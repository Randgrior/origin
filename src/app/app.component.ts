import {Component} from '@angular/core';
import {GetService} from './service/get.service';
import {PostService} from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wow';
  alpha: number;
  beta: number;
  d1: string;
  d2: string;
  delta1: number;
  delta2: number;
  eps: number;
  x0: number;
  result = 'myResult';

  constructor(private getService: GetService,
              private  postService: PostService) {
  }

  onSubmit() {
    this.postService.postData(
      this.alpha,
      this.beta,
      this.d1.split(',').map(Number),
      this.d2.split(',').map(Number),
      this.delta1,
      this.delta2,
      this.eps,
      this.x0).subscribe((i: string) => {
      this.result = i;
    });
  }

}
