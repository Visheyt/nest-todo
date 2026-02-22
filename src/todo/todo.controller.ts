import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './types';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { UpdateTodoDTO } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('all')
  getAll(): Todo[] {
    return this.todoService.getAll();
  }

  @Get('by-id/:id')
  getById(@Param('id') id: string) {
    return this.todoService.getById(+id);
  }

  @Post('add')
  addTodo(@Body() dto: CreateTodoDTO) {
    return this.todoService.addTodo(dto);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() dto: UpdateTodoDTO) {
    return this.todoService.updateTodo(+id, dto);
  }

  @Patch(':id')
  patchTodo(@Param('id') id: string, @Body() dto: Partial<UpdateTodoDTO>) {
    return this.todoService.patchTodo(+id, dto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(+id);
  }
}
