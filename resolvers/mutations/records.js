import { Tracks } from '../../db';

export const createTrack = (_, { input }) =>
  Tracks.create({
    ...input,
    hypeCoefficient: 0,
    rating: 0,
  });
