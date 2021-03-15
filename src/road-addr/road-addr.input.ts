// src/user/user.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRoadAddrInput {
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
