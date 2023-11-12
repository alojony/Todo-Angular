import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Import this if you're using mat-input
import { FormsModule } from '@angular/forms';
import { GridListComponent } from './grid-list/grid-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
