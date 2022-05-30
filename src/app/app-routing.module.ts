import { ToDoMainPageComponent } from './to-do-main-page/to-do-main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'todo-main',
    component: TodoPageComponent
  },
  {
    path: 'todo',
    component: ToDoMainPageComponent,
  },
  {
    path: 'edit-todo',
    component:EditTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
