import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  title = '';
  author = '';
  theme = '';
  // @Input() id: number = 0;

  @Output() onAdd: EventEmitter<Post> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  addPost() {
    if (this.title.trim() && this.author.trim() && this.theme.trim()) {
      const post: Post = {
        title: this.title,
        author: this.author,
        theme: this.theme,
        // id: this.id,
      };
      console.log('Post', post);
      this.onAdd.emit(post);
      this.title = '';
      this.author = '';
      this.theme = '';
    }
  }
}
