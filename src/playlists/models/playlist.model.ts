import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'playlist ' })
export class Playlist {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  creatorUsername: string;

  @Field()
  numberOfSongs: number;

  @Field()
  minutes: number;

  @Field({ nullable: true })
  description?: string;
}
