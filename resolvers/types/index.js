import { GraphQLDateTime } from 'graphql-iso-date';
import { GraphQLUrl } from 'graphql-url';

import { GlobalSearch } from './serach';
import { Track, Album } from './records';
import { Artist, ArtistType, Band, BandParticipant } from './artists';

export const typeResolvers = {
  Date: GraphQLDateTime,
  URL: GraphQLUrl,
  Track,
  Album,
  ArtistType,
  Artist,
  Band,
  BandParticipant,
  GlobalSearch,
};
