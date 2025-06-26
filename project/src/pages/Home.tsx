import React from 'react';
import Logo from '../components/Logo';
import AppInstructions from '../components/AppInstructions';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-8 animate-fadeIn">
      <div className="w-full max-w-2xl">
        <Logo />
        <div className="mt-12 w-full">
          <div className="card p-8 animate-slideUp">
            <h1 className="text-3xl font-serif font-bold text-center text-gradient mb-6">
              Bienvenido a Nuestra App
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-8"></div>
            <AppInstructions />
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="card p-8 animate-slideUp bg-gradient-to-br from-orange-50 to-amber-100 border-2 border-orange-200 shadow-xl rounded-2xl">
            <div className="flex flex-col items-center mb-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 border-2 border-orange-300 mb-2 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
              </span>
              <h2 className="text-2xl font-bold text-center text-orange-700 mb-1 drop-shadow">¿Deseas compartir una receta en nuestra app?</h2>
            </div>
            <p className="text-center text-gray-700 mb-4 text-lg font-medium">
              Ponte en contacto con nosotros y subiremos tu receta con gusto.
            </p>
            <div className="flex flex-col items-center gap-2 mb-2">
              <span className="text-orange-600 font-semibold text-lg">Cel.:</span>
              <a href="https://wa.me/59164340044" target="_blank" rel="noopener noreferrer" className="inline-block bg-white border border-orange-300 rounded-full px-4 py-2 text-orange-700 font-bold shadow hover:bg-orange-100 transition">+591 64340044</a>
              <a href="https://wa.me/59163781901" target="_blank" rel="noopener noreferrer" className="inline-block bg-white border border-orange-300 rounded-full px-4 py-2 text-orange-700 font-bold shadow hover:bg-orange-100 transition">+591 63781901</a>
              <a href="https://wa.me/59173301020" target="_blank" rel="noopener noreferrer" className="inline-block bg-white border border-orange-300 rounded-full px-4 py-2 text-orange-700 font-bold shadow hover:bg-orange-100 transition">+591 73301020</a>
            </div>
            <p className="text-center text-gray-500 text-sm mt-2">(Se puede contactar con cualquiera de estos números)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;