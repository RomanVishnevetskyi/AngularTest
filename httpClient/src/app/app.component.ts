import { Component, OnInit } from '@angular/core';

import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle: string = '';
  loading = false;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.fetchTodo();
  }
  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todosService
      .addTodo({
        title: this.todoTitle,
        completed: false,
      })
      .subscribe((todo) => {
        console.log(todo);
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }
  fetchTodo() {
    this.loading = true;
    this.todosService.fetchTodo().subscribe((response) => {
      console.log('Response', response);
      this.todos = response;
      this.loading = false;
    });
  }
  removeTodo(id: number) {
    this.todosService.removeTodo(id).subscribe((resp) => {
      this.todos = this.todos.filter((t) => t.id !== id);
    });
  }
}
