import React from 'react';
import { Dish } from '../types';

interface DishGridProps {
  dishes: Dish[];
  onSelectDish: (id: string) => void;
}

const DishGrid: React.FC<DishGridProps> = ({ dishes, onSelectDish }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dishes.map((dish, index) => (
        <div 
          key={dish.id} 
          className="bg-white rounded-2xl shadow-2xl border border-red-300 overflow-hidden cursor-pointer group animate-slideUp"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onSelectDish(dish.id)}
        >
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img 
              src={dish.image} 
              alt={dish.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
              {dish.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">
              {dish.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {dish.ingredients.length} ingredientes
                </span>
              </div>
              <div className="text-orange-600 dark:text-orange-400 font-bold text-sm">
                Ver receta →
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishGrid;