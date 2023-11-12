import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

interface Todo {
  text: string;
  completed: boolean;
}

export interface TodoList {
  todos: { todos: Todo[]; completed: boolean }[];
  pinned?: boolean;
}


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';  
  todoLists : TodoList[] = [];

  constructor(private todoService : TodoService) {}

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo.trim(), completed: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  markAsCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  // Use of DB to store to do lists.

  pinList(index: number) {
    this.todoService.pinTodoList(index);
  }

  saveList(index: number) {
    this.todoService.saveTodoList(index);
  }
}

