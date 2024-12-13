import { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.8,
    year: 2010,
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    genre: ["Comedy", "Drama", "Adventure"],
    rating: 8.1,
    year: 2014,
    imageUrl: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800",
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge."
  },
  {
    id: 3,
    title: "Interstellar",
    genre: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.6,
    year: 2014,
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    genre: ["Drama"],
    rating: 9.3,
    year: 1994,
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 5,
    title: "La La Land",
    genre: ["Romance", "Drama", "Musical"],
    rating: 8.0,
    year: 2016,
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
  }
];