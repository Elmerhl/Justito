import React, { useState } from 'react';
import { ArrowLeft, ChefHat, Clock, Users } from 'lucide-react';
import { dishes } from '../data/dishes';
import PortionCalculator from './PortionCalculator';
import YouTubeEmbed from './YouTubeEmbed';

interface RecipeDetailProps {
  dishId: string;
  onBack: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ dishId, onBack }) => {
  const [portions, setPortions] = useState(2);
  const dish = dishes.find(d => d.id === dishId);

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center animate-fadeIn">
        <div className="text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Plato no encontrado</h2>
          <p className="text-gray-600">El plato que buscas no existe en nuestro menú.</p>
        </div>
      </div>
    );
  }

  const calculateIngredientAmount = (amount: number) => {
    const ratio = portions / dish.defaultPortions;
    return (amount * ratio).toFixed(1).replace('.0', '');
  };

  return (
    <div className="px-6 py-8 pb-24 animate-fadeIn">
      <div className="sticky top-0 z-30 bg-white pt-6 pb-4 -mx-6 mb-8 shadow-xl border-b border-white/30 flex justify-start pl-6">
        <button 
          onClick={onBack}
          className="btn-primary flex items-center gap-3"
        >
          <ArrowLeft size={24} />
          <span>Volver al menú</span>
        </button>
      </div>
      
      <div className="card overflow-hidden mb-8">
        <div className="relative h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <img 
            src={dish.image} 
            alt={dish.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-gradient mb-4">{dish.name}</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6"></div>
        <p className="text-gray-600 text-lg leading-relaxed">{dish.description}</p>
      </div>
      
      <div className="card p-6 mb-8">
        <PortionCalculator 
          portions={portions} 
          setPortions={setPortions} 
          defaultPortions={dish.defaultPortions}
          categoryId={dish.categoryId}
        />
      </div>
      <div className="card p-8 mb-8">
        <div className="flex items-center mb-6">
          <ChefHat className="text-orange-600 mr-3" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">Ingredientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {dish.ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center p-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
              <span className="font-semibold text-gray-800 text-sm mr-2">{ingredient.name}</span>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-lg font-bold text-sm">
                = {calculateIngredientAmount(ingredient.amount)} {ingredient.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card p-8 mb-8">
        <div className="flex items-center mb-6">
          <Clock className="text-orange-600 mr-3" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">Preparación</h2>
        </div>
        <div className="space-y-6">
          {dish.steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
      
      {dish.videoUrl && (
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Video de preparación</h2>
          <YouTubeEmbed videoUrl={dish.videoUrl} />
          {dish.videoCredit && (
            <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold">Créditos:</span> {dish.videoCredit}
              </p>
            </div>
          )}
          {dish.name === 'Arroz con Leche' && (
            <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold">Créditos:</span> DE COCINA A COCINA
              </p>
            </div>
          )}
          {dish.name === 'Sopa de Arroz' && (
            <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold">Créditos:</span> Achiote
              </p>
            </div>
          )}
          {dish.name === 'Saice' && (
            <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold">Créditos:</span> CocinaSolo
              </p>
            </div>
          )}
          {dish.name === 'Picante de Gallina Criolla' && (
            <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold">Créditos:</span> RISSOLEE
              </p>
            </div>
          )}
          {dish.name === 'Humintas' && (
            <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold">Créditos:</span> Cocinandotelo
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;