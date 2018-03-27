import root from './schema/root.graphql';
import artists from './schema/artists.graphql';
import records from './schema/records.graphql';
import search from './schema/search.graphql';

export const typeDefs = [
  artists,
  records,
  search,
  root,
];
