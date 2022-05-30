import { Component, OnInit } from '@angular/core';
import { ArrayList } from '@arjunatlast/jsds';
import { Todo } from './api/todo';

import { ToDoService } from './service/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todoList: ArrayList<Todo>;
  selectedTodos: ArrayList<Todo>;
  todoTitle: string;
  todoContent: string;

  constructor(private ts: ToDoService) {}

  ngOnInit() {
    this.todoList = this.ts.getTodos();
    this.selectedTodos = this.ts.getSelectedTodos();
  }

  addTodo(): void {
    this.ts.addTodo(new Todo(this.todoTitle, this.todoContent));
  }

  deleteTodos(): void {
    this.ts.removeSelectedTodos();
  }

  openFile(): void {
    document.getElementById('backup_file').click();
  }
}
