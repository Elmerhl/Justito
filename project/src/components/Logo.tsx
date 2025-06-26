import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-bounceIn">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-gray-700 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <img
          src="/images/LOG.jpg"
          alt="Logo Justito"
          className="relative w-48 h-48 object-contain rounded-full shadow-2xl border-4 border-white/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-6 text-center">
        <h1 className="text-4xl font-serif font-bold text-gradient mb-2">Sabores</h1>
        <p className="text-gray-600 dark:text-gray-300 font-serif italic text-lg">Deliciosas recetas</p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-gray-700 rounded-full mx-auto mt-3"></div>
      </div>
    </div>
  );
};

export default Logo;