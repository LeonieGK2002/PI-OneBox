import React, { useState } from 'react';
import Button from '../components/Button';
import { useApp } from '../context';
import { Box } from 'lucide-react';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { setUser, navigate } = useApp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Login
    setUser({
      id: '123',
      name: 'Leonie Gabriella',
      email: 'demo@onebox.com',
      isSubscribed: true,
      points: 150
    });
    navigate('dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10">
        
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-brand-700 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
             <Box size={28} />
          </div>
          <h2 className="text-3xl font-bold text-stone-900">
            {isLogin ? 'Bienvenido' : 'Únete a OneBox'}
          </h2>
          <p className="text-stone-500 mt-2">
            {isLogin ? 'Continúa tu aventura sostenible' : 'Empieza a recibir sorpresas hoy'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
             <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Nombre Completo</label>
                <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    placeholder="Tu nombre"
                />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
            <input 
                type="email" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Contraseña</label>
            <input 
                type="password" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                placeholder="••••••••"
            />
          </div>

          <Button fullWidth size="lg" type="submit">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-stone-600 hover:text-brand-700 font-medium transition-colors"
          >
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Auth;