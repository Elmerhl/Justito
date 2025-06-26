import React from 'react';
import { Category } from '../types';

interface CategoryMenuProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="sticky top-0 z-20 bg-white overflow-x-auto pb-4 mb-6 shadow-xl border-b border-white/30 dark:border-dark-300/30 pt-4">
      <div className="flex space-x-4 px-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-3 rounded-2xl whitespace-nowrap font-bold shadow-lg border-2 transition-all duration-300 text-base focus:outline-none focus:ring-4 focus:ring-orange-400/50 focus:ring-offset-2 transform hover:scale-105 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 text-white border-orange-500 dark:border-orange-600 scale-110 shadow-xl'
                : 'bg-white/90 dark:bg-dark-200/90 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-dark-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 dark:hover:from-orange-900/20 dark:hover:to-amber-900/20 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500 hover:shadow-xl'
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;