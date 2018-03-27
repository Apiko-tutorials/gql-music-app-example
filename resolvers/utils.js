// Build query for tracks endpoint
export const tracksQuery = (args) => {
  const query = {};
  const options = { limit: args.limit };
  if (args.genres) query.genres = { $in: args.genres };
  if (args.artists) query.artists = { $in: args.artists };
  if (args.countries) query.country = { $in: args.countries };
  if (args.sortBy === 'RATING') options.sort = { rating: -1 };
  if (args.sortBy === 'TRENDING') options.sort = { hypeCoefficient: -1 };
  if (args.sortBy === 'NEW') options.sort = { releasedAt: -1 };
  return [query, {}, options];
};
