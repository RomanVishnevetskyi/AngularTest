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
  error = '';

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
    this.todosService.fetchTodo().subscribe(
      (response) => {
        console.log('Response', response);
        this.todos = response;
        this.loading = false;
      },
      (err) => {
        this.error = err.message;
      }
    );
  }
  removeTodo(id: number) {
    this.todosService.removeTodo(id).subscribe((resp) => {
      this.todos = this.todos.filter((t) => t.id !== id);
    });
  }
  completeTodo(id: number) {
    this.todosService.completeTodo(id).subscribe((todo) => {
      console.log(this.todos.find((t) => t.id === todo.id));

      (<Todo>this.todos.find((t) => t.id === todo.id)).completed = true;
    });
  }
}
