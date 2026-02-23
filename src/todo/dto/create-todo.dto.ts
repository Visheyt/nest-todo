import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export enum TodoTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}
export class CreateTodoDTO {
  @IsString({ message: 'Заголовок должен быть строкой' })
  @Length(2, 10)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть положительным' })
  @IsOptional()
  priority: number;

  @IsOptional()
  @IsArray({ message: 'Теги должны быть массивами' })
  @IsEnum(TodoTag, { message: 'Недопустимый тэг', each: true })
  tags: TodoTag[];
}
