import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToDoMainPageComponent } from './to-do-main-page/to-do-main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ToDoService } from './service/to-do.service';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { HttpClientModule } from  '@angular/common/http';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    ToDoMainPageComponent,
    TodoPageComponent,
    EditTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
