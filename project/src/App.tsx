import { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Suggestions from './pages/Suggestions';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Home />;
      case 1:
        return <Menu />;
      case 2:
        return <Suggestions />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <div className="flex-1 pb-16">
        {renderContent()}
      </div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;