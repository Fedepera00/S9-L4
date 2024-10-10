import { Component } from '@angular/core';
import { Root } from '../../modules/root';
import { Ipost } from '../../modules/interfaces';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((response) => {
        let postsAc = response.posts.filter((post) => post.active === false);

        this.postArr = postsAc.slice(0, 4);
        // this.postArr.push(response.posts[i]);
        console.log(this.postArr);
      });
  }
}
