import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArrayList } from '@arjunatlast/jsds';
import { Todo } from '../api/todo';
import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  todoList: any[];
  todoForm: FormGroup;
  constructor(private ts: ToDoService,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.getTodoList();
    this.todoForm = this.fb.group({
      title: ['',Validators.required],
      content: ['',Validators.required]
    })
  }
  addTodo(formVal): void {
    this.ts.addTodo(formVal).subscribe((data)=>{
      alert('success')
      this.todoForm.reset();
    this.getTodoList();
     
    })
    
  }
  getTodoList(){
    this.ts.getAllTodoList().subscribe((data)=>{
      this.todoList = data;
    })
  }

  deleteTodos(): void {
    
  }

  openFile(): void {
    document.getElementById('backup_file').click();
  }
}
