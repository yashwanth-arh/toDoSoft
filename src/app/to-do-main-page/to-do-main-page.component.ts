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

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../api/todo';
// import { ArrayList } from '@arjunatlast/jsds';

import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do-main-page',
  templateUrl: './to-do-main-page.component.html',
  styleUrls: ['./to-do-main-page.component.scss'],
})
export class ToDoMainPageComponent implements OnInit,OnChanges {
  // todo: any[];
  @Input() todo: any[] ;
  // selectedTodos: Todo;

  constructor(private ts: ToDoService,private route:Router) {}

  ngOnInit(): void {
    this.getTodoList();
    console.log(this.todo);
    
    // this.selectedTodos = this.ts.getSelectedTodos();
  }
ngOnChanges(changes: SimpleChanges): void {
  this.getTodoList();
}
  getTodoList(){
    this.ts.getAllTodoList().subscribe((data)=>{
      this.todo = data;
    })
  }
  delete(i) {
    this.ts.removeTodo(i.id).subscribe((res)=>{
      alert('success')
    this.getTodoList();
    })
  }
  goToEdit(i){
    // localStorage.setItem('todoVal', i);
    this.route.navigate(['edit-todo'],i);

  }
}
