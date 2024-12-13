import { Movie, UserPreferences } from '../types';

export function getRecommendations(movies: Movie[], preferences: UserPreferences): Movie[] {
  return movies.filter(movie => {
    const matchesGenre = movie.genre.some(g => preferences.favoriteGenres.includes(g));
    const matchesRating = movie.rating >= preferences.minimumRating;
    const matchesYear = movie.year >= preferences.yearRange[0] && movie.year <= preferences.yearRange[1];
    
    return matchesGenre && matchesRating && matchesYear;
  }).sort((a, b) => {
    const aGenreMatches = a.genre.filter(g => preferences.favoriteGenres.includes(g)).length;
    const bGenreMatches = b.genre.filter(g => preferences.favoriteGenres.includes(g)).length;
    return bGenreMatches - aGenreMatches || b.rating - a.rating;
  });
}