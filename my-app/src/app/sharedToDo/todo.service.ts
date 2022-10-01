import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  selectedTodo!: Todo;
  todos!: Todo[];
  readonly baseUrl = 'http://localhost:3000/todo';
  constructor(private http: HttpClient) { }

  postTodo(todo: Todo){
    return this.http.post(this.baseUrl, todo)
  }

  getTodo() {
    return this.http.get(this.baseUrl);
  }

  putTodo(todo: Todo) {
    return this.http.put(this.baseUrl + `/${todo._id}`, todo);
  }

  deleteTodo(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
