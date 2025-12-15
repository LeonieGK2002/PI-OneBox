import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <span className="text-2xl font-bold text-white tracking-tight">OneBox</span>
                <p className="mt-4 max-w-xs text-sm leading-relaxed">
                    Redefiniendo el comercio electrónico mediante la sostenibilidad y la sorpresa. 
                    Cada caja cuenta una historia de recuperación.
                </p>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Enlaces</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-brand-400">Sobre Nosotros</a></li>
                    <li><a href="#" className="hover:text-brand-400">Suscripciones</a></li>
                    <li><a href="#" className="hover:text-brand-400">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-brand-400">Privacidad</a></li>
                    <li><a href="#" className="hover:text-brand-400">Términos</a></li>
                </ul>
            </div>
        </div>
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs">
            <p>&copy; 2025 OneBox Project. Leonie Gabriella Kleindorp.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;