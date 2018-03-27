import { Albums, Artists, Tracks } from '../../db';

export const Track = {
  artists: ({ artists }) => Artists.find({ _id: { $in: artists } }),
  album: ({ _id }) => Albums.findOne({ tracks: _id }),
};

export const Album = {
  tracks: ({ tracks }) => Tracks.find({ _id: { $in: tracks } }),
  titleTrack: ({ titleTrack }) => Tracks.findById(titleTrack),
  artist: ({ artist }) => Artists.findById(artist),
};
