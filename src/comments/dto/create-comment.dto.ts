import { IsNotEmpty } from 'class-validator';
export class CreateCommentDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  itemCounts: string;
}
