import { Injectable } from '@nestjs/common';
import { Todo } from './types';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { UpdateTodoDTO } from './dto/update-todo.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAll() {
    return this.todos;
  }

  getById(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new NotFoundError('Todo not found');
    }

    return todo;
  }

  addTodo(dto: CreateTodoDTO) {
    const { title, description } = dto;

    const todo = {
      id: this.todos.length + 1,
      title,
      description,
      isCompleted: false,
    };
    this.todos.push(todo);

    return todo;
  }

  updateTodo(id: number, dto: UpdateTodoDTO) {
    const { title, isCompleted, description } = dto;
    const todo = this.getById(id);

    todo.title = title;
    todo.isCompleted = isCompleted;
    todo.description = description;

    return todo;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    return this.todos;
  }

  patchTodo(id: number, dto: Partial<UpdateTodoDTO>) {
    const todo = this.getById(id);

    Object.assign(todo, dto);

    return todo;
  }
}
