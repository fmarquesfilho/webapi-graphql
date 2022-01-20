import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewPlaylistInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  creatorUsername: string;

  @Field()
  numberOfSongs: number;

  @Field()
  minutes: number;

  @Field({ nullable: true })
  @IsOptional()
  @Length(3, 255)
  description: string;
}