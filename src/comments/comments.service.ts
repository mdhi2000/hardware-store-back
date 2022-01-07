import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsDocument } from './schemas/comment.schemas';
import { Comments } from './schemas/comment.schemas';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name)
    private commentModel: Model<CommentsDocument>,
  ) {}
  create(createCommentDto: CreateCommentDto) {
    return new this.commentModel(createCommentDto).save();
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: string) {
    return `This action returns a #${id} comment`;
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: string) {
    return `This action removes a #${id} comment`;
  }
}
