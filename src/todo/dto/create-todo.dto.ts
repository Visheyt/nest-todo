import { IsString, Length } from 'class-validator';

export class CreateTodoDTO {
  @IsString({ message: 'Заголовок должен быть строкой' })
  @Length(2, 10)
  title: string;
  @IsString()
  @Length(3, 50)
  description: string;
}
