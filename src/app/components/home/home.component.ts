import { Root } from '../../modules/root';
import { Ipost } from './../../modules/interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((response) => {
        this.postArr = response.posts.slice(0, 4);
        // this.postArr.push(response.posts[i]);
        console.log(this.postArr);
      });
  }
}
