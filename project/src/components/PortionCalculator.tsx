import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface PortionCalculatorProps {
  portions: number;
  setPortions: (portions: number) => void;
  defaultPortions: number;
  categoryId?: string;
}

const PortionCalculator: React.FC<PortionCalculatorProps> = ({ 
  portions, 
  setPortions, 
  defaultPortions,
  categoryId
}) => {
  const decreasePortions = () => {
    if (portions > 1) {
      setPortions(portions - 1);
    }
  };

  const increasePortions = () => {
    setPortions(portions + 1);
  };

  const isReposteria = categoryId === 'Reposteria';

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-6">
      <h2 className="text-xl font-semibold mb-2">Porciones</h2>
      <div className="flex items-center space-x-4">
        <button 
          onClick={decreasePortions} 
          className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
            portions > 1 ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' : 'border-gray-300 text-gray-300 cursor-not-allowed'
          }`}
          disabled={portions <= 1}
        >
          <Minus size={20} />
        </button>
        
        <span className="text-xl font-semibold w-8 text-center">{portions}</span>
        
        <button 
          onClick={increasePortions}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
        >
          <Plus size={20} />
        </button>
        
        <span className="text-gray-600 ml-2">
          {isReposteria
            ? (portions === 1 ? 'unidad' : 'unidades')
            : (portions === 1 ? 'persona' : 'personas')}
        </span>
      </div>
    </div>
  );
};

export default PortionCalculator;