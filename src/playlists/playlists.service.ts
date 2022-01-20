import { Injectable } from '@nestjs/common';
import { NewPlaylistInput } from './dto/new-playlist.input';
import { Playlist } from './models/playlist.model';

@Injectable()
export class PlaylistsService {

  async create(data: NewPlaylistInput): Promise<Playlist> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Playlist> {
    return {} as any;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}