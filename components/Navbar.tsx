import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ShoppingBag, Box } from 'lucide-react';
import Button from './Button';
import { useApp } from '../context';
import { Page } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, user, t, page, navigate } = useApp();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const handleNav = (p: Page) => {
    navigate(p);
    setIsOpen(false);
  };

  const isActive = (p: Page) => page === p 
    ? "text-brand-900 font-semibold" 
    : "text-stone-500 hover:text-brand-900 transition-colors";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || isOpen 
            ? 'bg-white/80 backdrop-blur-xl border-stone-200/50 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-2 group focus:outline-none">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-md'}`}>
                <Box size={20} strokeWidth={2.5} />
              </div>
              <span className={`text-xl font-display font-bold tracking-tight ${scrolled ? 'text-stone-900' : 'text-stone-900 mix-blend-difference'}`}>
                OneBox
              </span>
            </button>

            {/* Desktop Nav - Centered */}
            <div className={`hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 shadow-sm ${!scrolled && 'bg-white/90'}`}>
              <button onClick={() => handleNav('home')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${page === 'home' ? 'bg-brand-900 text-white shadow-md' : 'text-stone-600 hover:bg-stone-100'}`}>{t.nav.home}</button>
              <button onClick={() => handleNav('shop')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${page === 'shop' ? 'bg-brand-900 text-white shadow-md' : 'text-stone-600 hover:bg-stone-100'}`}>{t.nav.shop}</button>
              <button onClick={() => handleNav('dashboard')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${page === 'dashboard' ? 'bg-brand-900 text-white shadow-md' : 'text-stone-600 hover:bg-stone-100'}`}>{t.nav.dashboard}</button>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={toggleLang} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                title="Switch Language"
              >
                <span className="text-xs font-bold uppercase tracking-widest">{lang}</span>
              </button>

              {user ? (
                <button onClick={() => handleNav('dashboard')} className="flex items-center gap-3 pl-1 pr-4 py-1 bg-white border border-stone-200 rounded-full hover:shadow-md transition-all group">
                   <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
                      {user.name.charAt(0)}
                   </div>
                   <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900">Mi Cuenta</span>
                </button>
              ) : (
                <Button onClick={() => handleNav('auth')} variant="primary" size="sm" className="shadow-lg shadow-brand-900/10">
                  {t.nav.login}
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleLang} className="text-sm font-bold uppercase text-stone-900 bg-white/50 px-2 py-1 rounded">
                {lang}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-stone-800 focus:outline-none bg-white/50 rounded-full backdrop-blur-md">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-stone-50 md:hidden pt-24 px-6 animate-fade-in">
           <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNav('home')}
              className="text-3xl font-display font-bold text-stone-900 text-left py-2 border-b border-stone-200"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => handleNav('shop')}
              className="text-3xl font-display font-bold text-stone-900 text-left py-2 border-b border-stone-200"
            >
              {t.nav.shop}
            </button>
             <button 
              onClick={() => handleNav('dashboard')}
              className="text-3xl font-display font-bold text-stone-900 text-left py-2 border-b border-stone-200"
            >
              {t.nav.dashboard}
            </button>
            {!user && (
              <div className="pt-8">
                <Button onClick={() => handleNav('auth')} fullWidth size="lg">
                    {t.nav.login}
                </Button>
              </div>
            )}
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;