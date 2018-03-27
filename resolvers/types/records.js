import { Albums } from '../../db';

export const Track = {
  artists: ({ artists }, args, { artistsLoader }) => artistsLoader.loadMany(artists),
  album: ({ _id }) => Albums.findOne({ tracks: _id }),
};

export const Album = {
  tracks: ({ tracks }, args, { tracksLoader }) => tracksLoader.loadMany(tracks),
  titleTrack: ({ titleTrack }, args, { tracksLoader }) => tracksLoader.load(titleTrack),
  artist: ({ artist }, args, { artistsLoader }) => artistsLoader.load(artist),
};
