import { Injectable } from '@angular/core';
import { Todo } from '../api/todo';
import { ArrayList } from '@arjunatlast/jsds';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare const Buffer;

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private selectedTodos: ArrayList<Todo> = new ArrayList<Todo>(100);
  private todoList: ArrayList<Todo> = new ArrayList<Todo>(100);
  private baseUrl = 'https://6294e2e563b5d108c196657a.mockapi.io/api/todo';
  constructor(private http: HttpClient) {}

  getAllTodoList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/todoList`);
  }
  removeTodo(id): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/todoList/${id}`);
  }
  addTodo(todo): Observable <any> {
    return this.http.post<any>(`${this.baseUrl}/todoList`,todo);
  }

}
