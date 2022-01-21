import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() item: Post = {} as Post;
  @Output() onRemove = new EventEmitter<number>();
  constructor() {
    // console.log('constructor:', this.item);
  }

  ngOnInit(): void {
    // console.log('ngInit:', this.item);
  }
  ngOnDestroy() {
    alert('Post will be delete');
  }
  removePost() {
    this.onRemove.emit(this.item.id);
  }
}
