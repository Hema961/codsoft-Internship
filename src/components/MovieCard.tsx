import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={movie.imageUrl} 
        alt={movie.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{movie.title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{movie.rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {movie.genre.map((g) => (
            <span 
              key={g}
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">{movie.description}</p>
        <p className="text-sm text-gray-500">Released: {movie.year}</p>
      </div>
    </div>
  );
}