import React, { useState } from 'react';
import { Movie, UserPreferences } from './types';
import { movies } from './data/movies';
import { getRecommendations } from './utils/recommendationEngine';
import { MovieCard } from './components/MovieCard';
import { PreferencesForm } from './components/PreferencesForm';
import { Sparkles } from 'lucide-react';

function App() {
  const [preferences, setPreferences] = useState<UserPreferences>({
    favoriteGenres: ["Drama", "Sci-Fi"],
    minimumRating: 8.0,
    yearRange: [1990, 2024]
  });

  const recommendations = getRecommendations(movies, preferences);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Movie Recommendations</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <PreferencesForm
              preferences={preferences}
              onPreferencesChange={setPreferences}
            />
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Recommended for You
              </h2>
              <p className="text-gray-600">
                Based on your preferences, we found {recommendations.length} movies you might enjoy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>

            {recommendations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  No movies match your current preferences. Try adjusting your filters!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;