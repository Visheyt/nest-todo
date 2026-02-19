import { Injectable } from '@nestjs/common';
import { Todo } from './types';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAll() {
    return this.todos;
  }

  getById(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  addTodo({ title, description }: { title: string; description: string }) {
    this.todos.push({
      id: `${this.todos.length + Date.now()} `,
      title,
      description,
      isCompleted: false,
    });
  }
}
