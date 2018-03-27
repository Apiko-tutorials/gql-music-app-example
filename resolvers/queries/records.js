import { Tracks, Albums } from '../../db';
import { tracksQuery } from '../utils';

export const track = (_, { id }) => Tracks.findById(id);

export const tracks = (_, args) => Tracks.find(...tracksQuery(args));

export const album = (_, { id }) => Albums.findById(id);

export const albums = (_, { limit }) => Albums.find({}, {}, { limit, sort: { rating: 1 } });
