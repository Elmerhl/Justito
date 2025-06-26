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
    <div className="min-h-screen">
      {selectedDish ? (
        <RecipeDetail dishId={selectedDish} onBack={handleBack} />
      ) : (
        <div className="px-4 py-6">
          <h1 className="text-2xl font-serif font-bold text-gray-800 mb-4">Nuestro Menú</h1>
          <CategoryMenu 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
          <DishGrid dishes={filteredDishes} onSelectDish={setSelectedDish} />
        </div>
      )}
    </div>
  );
};

export default Menu;