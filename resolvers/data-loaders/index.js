import DataLoader from 'dataloader';
import { Artists, Tracks } from '../../db';

// Use toString to compare MongoID objects
const idsEq = k => d => d._id.toString() === k.toString();

// Make sure that the docs are in the same order as keys and have null value if nothing found
const mapLoaderRes = keys => data =>
  keys.map(k => data.find(idsEq(k)) || null);

export const createLoaders = () => ({
  // Loader take an array of unique keys and return array of values resolved by promise
  artistsLoader: new DataLoader(keys =>
    Artists.find({ _id: { $in: keys } })
      .then(mapLoaderRes(keys))),

  tracksLoader: new DataLoader(keys =>
    Tracks.find({ _id: { $in: keys } })
      .then(mapLoaderRes(keys))),
});
