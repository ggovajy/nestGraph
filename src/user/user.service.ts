// src/user/user.service.ts
import { Model, FilterQuery, CreateQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './DTO/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(input: CreateQuery<User>): Promise<User> {
    return this.userModel.create(input);
  }

  async findById(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }
  async findByName(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }
}
