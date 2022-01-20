import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PlaylistsModule } from './playlists/playlists.module';

@Module({
  imports: [
    PlaylistsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
