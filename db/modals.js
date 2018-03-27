import mongoose, { Schema } from 'mongoose';

export const artistSchema = Schema({
  name: String,
  rating: Number,
  startActivity: Date,
  endActivity: Date,
  country: String,
  photo: String,
  website: String,
  genres: [String],
  artistType: Schema.Types.Mixed,
});

const recordSchema = {
  name: String,
  rating: Number,
  genres: [String],
  releasedAt: Date,
  label: String,
  logo: String,
};

export const trackSchema = Schema({
  ...recordSchema,
  url: String,
  artists: [Schema.Types.ObjectId],
  hypeCoefficient: Number,
});

export const albumSchema = Schema({
  ...recordSchema,
  artist: Schema.Types.ObjectId,
  tracks: [Schema.Types.ObjectId],
  titleTrack: Schema.Types.ObjectId,
  producer: String,
});

export const Artists = mongoose.model('artists', artistSchema);

export const Tracks = mongoose.model('tracks', trackSchema);

export const Albums = mongoose.model('albums', albumSchema);
