import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class RoadAddr extends Document {
  @Field({ nullable: true })
  DONG_CD: string;

  @Field({ nullable: true })
  SIDO_NM: string;

  @Field({ nullable: true })
  SIGUNGU_NM: string;

  @Field({ nullable: true })
  EMD_NM: string;

  @Field({ nullable: true })
  age: number;
}