import React from 'react';
import { Home, UtensilsCrossed, Coffee } from 'lucide-react';

interface TabNavigationProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Inicio', icon: <Home size={24} /> },
    { name: 'Menú', icon: <UtensilsCrossed size={24} /> },
    { name: 'Sugerencias', icon: <Coffee size={24} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white !bg-opacity-100 shadow-2xl border-t border-white/30 dark:border-dark-300/30">
      <div className="flex justify-around items-center h-20 px-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center flex-1 h-20 transition-all duration-300 relative group ${
              activeTab === index 
                ? 'text-orange-600 dark:text-orange-400 scale-110' 
                : 'text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
            }`}
            onClick={() => setActiveTab(index)}
          >
            <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
              activeTab === index 
                ? 'bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 shadow-lg' 
                : 'bg-transparent group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20'
            }`} />
            <div className="relative z-10 flex flex-col items-center">
              <div className={`transition-all duration-300 ${
                activeTab === index ? 'transform scale-110' : 'group-hover:scale-105'
              }`}>
                {tab.icon}
              </div>
              <span className={`text-xs mt-1 font-semibold transition-all duration-300 ${
                activeTab === index ? 'text-orange-700 dark:text-orange-300' : 'text-gray-600 dark:text-gray-300'
              }`}>
                {tab.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;