import { Module } from '@nestjs/common';
import { PlaylistsResolver } from './playlists.resolver';
import { PlaylistsService } from './playlists.service';

@Module({
  providers: [PlaylistsResolver, PlaylistsService],
})
export class PlaylistsModule {}