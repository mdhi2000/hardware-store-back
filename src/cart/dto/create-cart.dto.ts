import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/schemas/user.schema';

export class CreateCartDto {
  @IsNotEmpty()
  user: User;

  total: number;

  itemCounts: number;
}
