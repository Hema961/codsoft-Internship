export interface Movie {
  id: number;
  title: string;
  genre: string[];
  rating: number;
  year: number;
  imageUrl: string;
  description: string;
}

export interface UserPreferences {
  favoriteGenres: string[];
  minimumRating: number;
  yearRange: [number, number];
}