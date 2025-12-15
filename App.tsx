import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Language, User, Page } from './types';
import { translations } from './constants';
import { AppContext } from './context';

// Static imports
import Home from './pages/Home';
import Shop from './pages/Shop';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [user, setUser] = useState<User | null>(null);
  const [page, setPage] = useState<Page>('home');

  const t = translations[lang];

  const navigate = (newPage: Page) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'shop': return <Shop />;
      case 'dashboard': return <Dashboard />;
      case 'auth': return <Auth />;
      default: return <Home />;
    }
  };

  return (
    <AppContext.Provider value={{ lang, setLang, user, setUser, t, page, navigate }}>
      <div className="flex flex-col min-h-screen font-sans text-stone-900 bg-stone-50">
        <Navbar />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;