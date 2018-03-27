export const GlobalSearch = {
  __resolveType({ titleTrack, artistType, artists }) {
    if (titleTrack) return 'Album';
    if (artistType) return 'Artist';
    if (artists) return 'Track';
    return null;
  },
};
