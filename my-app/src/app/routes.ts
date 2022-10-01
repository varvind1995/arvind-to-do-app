import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TodoComponent } from './todo/todo.component';

export const appRoutes : Routes = [
    { path: 'employee', component: EmployeeComponent },
    { path: 'todo', component: TodoComponent },
    { path: '', redirectTo: '/todo', pathMatch: 'full' }
]; 