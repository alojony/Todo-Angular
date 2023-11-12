// todo.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  text: string;
  completed: boolean;
}

export interface TodoList {
  todos: Todo[];
  pinned?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoLists: TodoList[] = [];
  private todoListsSubject = new BehaviorSubject<TodoList[]>(this.todoLists);

  constructor() {}

  getTodoLists() {
    return this.todoListsSubject.asObservable();
  }

  addTodoList(todoList: TodoList) {
    this.todoLists.push(todoList);
    this.todoListsSubject.next(this.todoLists);
  }

  pinTodoList(index: number) {
    if (this.todoLists[index]) {
      this.todoLists[index].pinned = true;
      this.todoListsSubject.next(this.todoLists);
    }
  }

  saveTodoList(index: number) {
    if (this.todoLists[index]) {
      this.todoLists[index].pinned = false;
      this.todoListsSubject.next(this.todoLists);
    }
  }
}
