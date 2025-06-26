import React, { useState } from 'react';
import { votarSugerenciaPositiva, votarSugerenciaNegativa } from "../FirebaseConfig";
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';

interface SuggestionCardProps {
  suggestion: {
    id: string;
    name: string;
    description: string;
    image: string;
    votosSi: number;
    votosNo: number;
  };
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion }) => {
  const [hasVoted, setHasVoted] = useState(false);

  const votar = async (tipo: "si" | "no") => {
    setHasVoted(true);
    if (tipo === "si") {
      await votarSugerenciaPositiva(suggestion.id);
    } else {
      await votarSugerenciaNegativa(suggestion.id);
    }
  };

  return (
    <div className="card overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
          <img 
            src={suggestion.image || "https://via.placeholder.com/150"} 
            alt={suggestion.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="lg:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
              {suggestion.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
              {suggestion.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-2xl border border-orange-100">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="text-green-600" size={20} />
                  <span className="text-green-600 font-bold text-lg">{suggestion.votosSi}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsDown className="text-red-600" size={20} />
                  <span className="text-red-600 font-bold text-lg">{suggestion.votosNo}</span>
                </div>
              </div>
            </div>

            {hasVoted ? (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4 text-green-700 flex items-center justify-center space-x-2">
                <CheckCircle className="text-green-600" size={24} />
                <span className="font-bold text-lg">¡Gracias por tu voto!</span>
              </div>
            ) : (
              <div className="flex gap-4">
                <button
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2"
                  onClick={() => votar("si")}
                >
                  <ThumbsUp size={20} />
                  <span>¡Sí, me gusta!</span>
                </button>
                <button
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2"
                  onClick={() => votar("no")}
                >
                  <ThumbsDown size={20} />
                  <span>No me convence</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;