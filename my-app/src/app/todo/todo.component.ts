import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodoService } from '../sharedToDo/todo.service';
import { Todo } from '../sharedToDo/todo.model';

declare var M: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshtodoList();
  }

  resetForm(form?: NgForm){
    if(form)
     form.reset();
    this.todoService.selectedTodo = {
      _id : "",
      topic : "",
      description : ""
    }
    this.refreshtodoList();
  }

  onSubmit(form : NgForm){
    if (form.value._id == "") {
      this.todoService.postTodo(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.refreshtodoList();
        M.toast({html: 'Saved Successfully', classes: 'rounded'})
      });
    } else {
      this.todoService.putTodo(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshtodoList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      })
    }
  }

  refreshtodoList() {
    this.todoService.getTodo().subscribe((res) => {
      this.todoService.todos = res as Todo[];
    });
  }

  onEdit(todo: Todo) {
    this.todoService.selectedTodo = todo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.todoService.deleteTodo(_id).subscribe((res) => {
        this.refreshtodoList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
