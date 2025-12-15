import React, { useState } from 'react';
import { Menu, X, Globe, User as UserIcon, Box } from 'lucide-react';
import Button from './Button';
import { useApp } from '../context';
import { Page } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, user, t, page, navigate } = useApp();

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const handleNav = (p: Page) => {
    navigate(p);
    setIsOpen(false);
  };

  const isActive = (p: Page) => page === p ? "text-brand-700 font-semibold" : "text-stone-600 hover:text-brand-700";

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center space-x-2 focus:outline-none">
            <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center text-white">
              <Box size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-900">OneBox</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNav('home')} className={isActive('home')}>{t.nav.home}</button>
            <button onClick={() => handleNav('shop')} className={isActive('shop')}>{t.nav.shop}</button>
            <button onClick={() => handleNav('dashboard')} className={isActive('dashboard')}>{t.nav.dashboard}</button>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLang} 
              className="flex items-center space-x-1 text-sm text-stone-600 hover:text-brand-700 transition-colors focus:outline-none"
            >
              <Globe size={18} />
              <span className="uppercase">{lang}</span>
            </button>

            {user ? (
              <button onClick={() => handleNav('dashboard')} className="focus:outline-none">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 border border-brand-200">
                   <span className="font-semibold">{user.name.charAt(0)}</span>
                </div>
              </button>
            ) : (
              <div onClick={() => handleNav('auth')}>
                <Button variant="primary" size="sm">{t.nav.login}</Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLang} className="text-stone-600 focus:outline-none">
              <span className="uppercase font-bold text-xs">{lang}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <button 
              onClick={() => handleNav('home')}
              className="block w-full text-left px-3 py-4 text-base font-medium text-stone-700 hover:bg-brand-50 rounded-lg"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => handleNav('shop')}
              className="block w-full text-left px-3 py-4 text-base font-medium text-stone-700 hover:bg-brand-50 rounded-lg"
            >
              {t.nav.shop}
            </button>
             <button 
              onClick={() => handleNav('dashboard')}
              className="block w-full text-left px-3 py-4 text-base font-medium text-stone-700 hover:bg-brand-50 rounded-lg"
            >
              {t.nav.dashboard}
            </button>
            {!user && (
              <div className="pt-4">
                <div onClick={() => handleNav('auth')}>
                  <Button fullWidth>{t.nav.login}</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;