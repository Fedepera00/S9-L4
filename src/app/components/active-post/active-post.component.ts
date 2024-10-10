import { Component } from '@angular/core';
import { Ipost } from '../../modules/interfaces';
import { Root } from '../../modules/root';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((response) => {
        let postsAc = response.posts.filter((post) => post.active === true);

        this.postArr = postsAc.slice(0, 4);
        // this.postArr.push(response.posts[i]);
        console.log(this.postArr);
      });
  }
}
