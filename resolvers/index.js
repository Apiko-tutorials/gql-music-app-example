import { queryResolvers } from './queries';
import { typeResolvers } from './types';

export const resolvers = {
  Query: queryResolvers,
  ...typeResolvers,
};
