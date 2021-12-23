import { createSHA512Hash } from '@utils/hash';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from 'src/users/schemas/user.schema';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  create(createUserDto: CreateUserDto) {
    if (this.userModel.exists({ username: createUserDto.username }))
      throw new HttpException('نام کاربری تگراری می باشد', HttpStatus.CONFLICT);
    createUserDto.password = createSHA512Hash(createUserDto.password);
    return new this.userModel(createUserDto).save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
