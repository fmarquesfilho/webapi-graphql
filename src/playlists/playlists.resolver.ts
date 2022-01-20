import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewPlaylistInput } from './dto/new-playlist.input';
import { Playlist } from './models/playlist.model';
import { PlaylistsService } from './playlists.service';

const pubSub = new PubSub();

@Resolver(of => Playlist)
export class PlaylistsResolver {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Query(returns => Playlist)
  async playlist(@Args('id') id: string): Promise<Playlist> {
    const playlist = await this.playlistsService.findOneById(id);
    if (!playlist) {
      throw new NotFoundException(id);
    }
    return playlist;
  }

  @Mutation(returns => Playlist)
  async addPlaylist(
    @Args('newPlaylistData') newPlaylistData: NewPlaylistInput,
  ): Promise<Playlist> {
    const playlist = await this.playlistsService.create(newPlaylistData);
    pubSub.publish('playlistAdded', { playlistAdded: playlist });
    return playlist;
  }

  @Mutation(returns => Boolean)
  async removePlaylist(@Args('id') id: string) {
    return this.playlistsService.remove(id);
  }

  @Subscription(returns => Playlist)
  playlistAdded() {
    return pubSub.asyncIterator('playlistAdded');
  }
}