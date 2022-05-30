// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-to-do-main-page',
//   templateUrl: './to-do-main-page.component.html',
//   styleUrls: ['./to-do-main-page.component.scss']
// })
// export class ToDoMainPageComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../api/todo';
import { ArrayList } from '@arjunatlast/jsds';

import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do-main-page',
  templateUrl: './to-do-main-page.component.html',
  styleUrls: ['./to-do-main-page.component.scss'],
})
export class ToDoMainPageComponent implements OnInit {
  @Input() todo: Todo;
  selectedTodos: ArrayList<Todo>;

  constructor(private ts: ToDoService) {}

  ngOnInit(): void {
    this.selectedTodos = this.ts.getSelectedTodos();
  }

  delete() {
    this.ts.removeTodo(this.todo);
  }

  select() {
    this.ts.selectTodo(this.todo);
  }

  unselect() {
    this.ts.unSelectTodo(this.todo);
  }
}
