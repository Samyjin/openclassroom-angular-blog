import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openclassroom-blog';

  posts: Post[] = [];

  constructor() {

    // Generate posts
    for (let i = 0; i < 3; i++) {
      this.posts.push(new Post(`Post n°${i + 1}`, 'Lorem ipsum dolor sit amet, consectetur adipis\
      Curabitur sit amet nulla tellus. Morbi non pulvinar mi. Pellentesque at iaculis neque. Donec dapibus,\
      nisl vitae convallis scelerisque, leo metus mattis mi, ac mattis ante urna sit amet turpis. Integer non \
      faucibus velit, a dignissim felis. Nunc sed tortor scelerisque, aliquet.'));
    }
  }

}
