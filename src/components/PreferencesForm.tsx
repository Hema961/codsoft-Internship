import React from 'react';
import { UserPreferences } from '../types';

interface PreferencesFormProps {
  preferences: UserPreferences;
  onPreferencesChange: (preferences: UserPreferences) => void;
}

const availableGenres = [
  "Action", "Adventure", "Comedy", "Drama", "Musical",
  "Romance", "Sci-Fi", "Thriller"
];

export function PreferencesForm({ preferences, onPreferencesChange }: PreferencesFormProps) {
  const handleGenreToggle = (genre: string) => {
    const newGenres = preferences.favoriteGenres.includes(genre)
      ? preferences.favoriteGenres.filter(g => g !== genre)
      : [...preferences.favoriteGenres, genre];
    
    onPreferencesChange({
      ...preferences,
      favoriteGenres: newGenres
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Your Preferences</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Favorite Genres</h3>
        <div className="flex flex-wrap gap-2">
          {availableGenres.map(genre => (
            <button
              key={genre}
              onClick={() => handleGenreToggle(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${preferences.favoriteGenres.includes(genre)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Minimum Rating</h3>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={preferences.minimumRating}
          onChange={(e) => onPreferencesChange({
            ...preferences,
            minimumRating: parseFloat(e.target.value)
          })}
          className="w-full"
        />
        <div className="text-center text-gray-600">
          {preferences.minimumRating.toFixed(1)} / 10
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Year Range</h3>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">From</label>
            <input
              type="number"
              value={preferences.yearRange[0]}
              onChange={(e) => onPreferencesChange({
                ...preferences,
                yearRange: [parseInt(e.target.value), preferences.yearRange[1]]
              })}
              className="w-full px-3 py-2 border rounded-md"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">To</label>
            <input
              type="number"
              value={preferences.yearRange[1]}
              onChange={(e) => onPreferencesChange({
                ...preferences,
                yearRange: [preferences.yearRange[0], parseInt(e.target.value)]
              })}
              className="w-full px-3 py-2 border rounded-md"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}