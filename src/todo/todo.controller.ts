import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './types';
import { CreateTodoDTO } from './create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('all')
  getAll(): Todo[] {
    return this.todoService.getAll();
  }

  @Get('by-id/:id')
  getById(@Param('id') id: string) {
    return this.todoService.getById(id);
  }

  @Post('add')
  addTodo(@Body() createTodoDTO: CreateTodoDTO) {
    this.todoService.addTodo({
      title: createTodoDTO.title,
      description: createTodoDTO.description,
    });
  }
}
