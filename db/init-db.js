import mongoose from 'mongoose';

import { Artists, Tracks, Albums } from './modals';
import { artists, tracks, albums } from './data-samples';


mongoose.connect('mongodb://localhost/gql-example');
const db = mongoose.connection;

db.on('error', console.error);

// Fill empty db with data samples
db.on('open', () =>
  Tracks.findOne()
    .then(track =>
      !track && Promise.all([
        Tracks.collection.insertMany(tracks),
        Albums.collection.insertMany(albums),
        Artists.collection.insertMany(artists),
      ]))
    .then(() => console.log('connected to DB'))
    .catch(console.error));
