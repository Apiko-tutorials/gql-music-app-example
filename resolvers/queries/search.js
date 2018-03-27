import { Artists, Tracks, Albums } from '../../db';

const termReg = term => new RegExp(term, 'ig');

const options = limit => ({ limit, sort: { rating: -1 } });

const searchArtists = (term, limit) =>
  Artists.find(
    { name: termReg(term), 'artistType.type': { $in: ['SINGLE', 'BAND'] } },
    {},
    options(limit),
  );

const searchTrack = (term, limit) =>
  Tracks.find({ name: termReg(term) }, {}, options(limit));

const searchAlbums = (term, limit) =>
  Albums.find({ name: termReg(term) }, {}, options(limit));

export const search = (_, { term, limit }) =>
  Promise.all([
    searchArtists(term, limit / 3),
    searchTrack(term, limit / 3),
    searchAlbums(term, limit / 3),
  ])
    .then(res => res.reduce((acc, i) => acc.concat(i), []))
    .then(res => res.sort((a, b) => b.rating - a.rating));
