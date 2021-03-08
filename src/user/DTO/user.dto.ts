import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class User extends Document {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  age: number;
}