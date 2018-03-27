import { queryResolvers } from './queries';
import { typeResolvers } from './types';
import { mutationResolvers } from './mutations';

export const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
  ...typeResolvers,
};
