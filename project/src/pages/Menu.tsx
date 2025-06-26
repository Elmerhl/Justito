import React, { useState } from 'react';
import CategoryMenu from '../components/CategoryMenu';
import DishGrid from '../components/DishGrid';
import RecipeDetail from '../components/RecipeDetail';
import { categories } from '../data/categories';
import { dishes } from '../data/dishes';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);

  const filteredDishes = selectedCategory === 'todos' 
    ? dishes 
    : dishes.filter(dish => dish.categoryId === selectedCategory);
  
  const handleBack = () => {
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen animate-fadeIn bg-[#F3E3C3]">
      {selectedDish ? (
        <RecipeDetail dishId={selectedDish} onBack={handleBack} />
      ) : (
        <div className="px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-gradient mb-2">Nuestro Menú</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 rounded-full"></div>
          </div>
          <CategoryMenu 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
          <div className="mt-8">
            <DishGrid dishes={filteredDishes} onSelectDish={setSelectedDish} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
