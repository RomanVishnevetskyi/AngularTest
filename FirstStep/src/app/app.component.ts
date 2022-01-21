import { Component, ViewChild } from '@angular/core';
import { Counter2Component } from './counter2/counter2.component';
import { CountService } from './servises/count.service';
import { LocalCountService } from './servises/local-count.service';
export interface Post {
  title: string;
  author: string;
  theme: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCountService],
})
export class AppComponent {
  @ViewChild(Counter2Component)
  private counterComponent: Counter2Component | undefined;
  name: string = 'Vasa';

  increment() {
    this.counterComponent?.increment();
  }
  decrement() {
    this.counterComponent?.decrement();
  }
  randomNum(): number {
    return Math.floor(Math.random() * 101);
  }
  posts: Post[] = [
    {
      title: 'Post#1',
      author: 'Pushkin',
      theme: 'Poeziya',
      id: this.randomNum(),
    },
    // {
    //   title: 'Post#2',
    //   author: 'Lermontov',
    //   theme: 'Stihotvoreniia',
    //   id: this.randomNum(),
    // },
    // {
    //   title: 'Post#3',
    //   author: 'Blok',
    //   theme: 'Fantastika',
    //   id: this.randomNum(),
    // },
  ];
  startNum: number = 12;
  constructor(
    public countService: CountService,
    public localCountService: LocalCountService
  ) {}
  ngOnInit(): void {}
  removePost(id: number) {
    console.log('remove id', id);
    this.posts = this.posts.filter((p) => {
      return p.id !== id;
    });
  }
  updatePost(post: Post) {
    this.posts.push(post);
  }
  resultCounter(n: number) {
    console.log(n);
  }
}
