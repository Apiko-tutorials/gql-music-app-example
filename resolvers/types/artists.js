import { Tracks, Albums, Artists } from '../../db';
import { tracksQuery } from '../utils';

export const Artist = {
  tracks: ({ _id }, args) => Tracks.find(...tracksQuery({ ...args, artists: [_id] })),
  albums: ({ _id }) => Albums.find({ artist: _id }),
  artistType: ({ artistType, _id }) => ({ ...artistType, _id }),
};

export const ArtistType = {
  __resolveType: ({ type }) => {
    if (type === 'SINGLE') return 'Single';
    if (type === 'BAND') return 'Band';
    if (type === 'BAND_PARTICIPANT') return 'BandParticipant';
    return null;
  },
};

export const BandParticipant = {
  band: ({ _id }) => Artists.findOne({ 'artistType.members': _id }),
};

export const Band = {
  members: ({ members }) => Artists.find({ _id: { $in: members } }),
};
