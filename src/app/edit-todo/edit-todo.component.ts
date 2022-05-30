import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['',Validators.required],
      content: ['',Validators.required]
    })
  }
  editTodo(todoForm){
    console.log(this.route['lastSuccessfulNavigation'].extras);
     
  }

}
