import React from 'react';
import { Search, Scroll, ThumbsUp } from 'lucide-react';

const AppInstructions: React.FC = () => {
  const instructions = [
    {
      icon: <Search className="text-white" size={28} />,
      title: 'Explora nuestro menú',
      description: 'Navega por categorías para descubrir todos nuestros deliciosos platos.',
    },
    {
      icon: <Scroll className="text-white" size={28} />,
      title: 'Descubre recetas',
      description: 'Accede a las recetas completas y ajusta las porciones según tus necesidades.',
    },
    {
      icon: <ThumbsUp className="text-white" size={28} />,
      title: 'Califica sugerencias',
      description: 'Ayúdanos a mejorar votando por los platos que te gustaría ver en el futuro.',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-center text-gray-800 dark:text-gray-100 mb-8">Cómo usar esta app</h2>
      <div className="space-y-6">
        {instructions.map((item, index) => (
          <div 
            key={index} 
            className="flex items-start p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 border border-orange-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-gray-700 p-3 rounded-2xl mr-4 shadow-lg">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppInstructions;