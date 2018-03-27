import { Artists } from '../../db';

export const artists = (_, { types, limit }) =>
  Artists.find({ 'artistType.type': { $in: types } }, {}, { limit });

export const artist = (_, { id }, { artistsLoader }) =>
  artistsLoader.load(id);
