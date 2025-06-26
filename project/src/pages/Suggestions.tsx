import React from 'react';
import SuggestionCard from '../components/SuggestionCard';
import { useSugerencias } from '../hooks/useSugerencias';
import { Suggestion } from '../types';

const Suggestions: React.FC = () => {
  const { sugerencias, loading } = useSugerencias();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center animate-fadeIn">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Cargando sugerencias...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gradient mb-3">Sugerencias de Platos</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Estos son platos que estamos considerando añadir a nuestro menú. ¡Vota por tus favoritos!
        </p>
      </div>
      <div className="space-y-6">
        {sugerencias.map((suggestion: Suggestion, index: number) => (
          <div 
            key={suggestion.id}
            className="animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <SuggestionCard suggestion={suggestion} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;