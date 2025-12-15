import React, { useState, useEffect } from 'react';
import { useApp } from '../context';
import ScratchCard from '../components/ScratchCard';
import { Truck, Award, Package, Clock, Settings } from 'lucide-react';
import Button from '../components/Button';

const Dashboard: React.FC = () => {
  const { user, t, lang, navigate } = useApp();
  const [showGame, setShowGame] = useState(false);
  const [prizeWon, setPrizeWon] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('auth');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleGameComplete = () => {
    setTimeout(() => {
        setPrizeWon("20% OFF NEXT BOX");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Modern Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
             <div>
                <h1 className="text-4xl font-display font-bold text-stone-900">{t.dashboard.welcome}, {user.name.split(' ')[0]}</h1>
                <p className="text-stone-500 mt-2 text-lg">Aquí tienes el resumen de tu suscripción <span className="text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded-md border border-brand-100">Green Standard</span></p>
            </div>
            <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                    <Settings size={16} /> Configuración
                </Button>
            </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-2">Puntos OneBox</p>
                <p className="text-3xl font-display font-bold text-brand-700">{user.points}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-2">Cajas Recibidas</p>
                <p className="text-3xl font-display font-bold text-stone-900">12</p>
            </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-2">Próximo Cobro</p>
                <p className="text-3xl font-display font-bold text-stone-900">25 Feb</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-2">Impacto</p>
                <p className="text-3xl font-display font-bold text-stone-900">14kg <span className="text-sm font-sans font-normal text-stone-400">CO2 ahorrado</span></p>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Tracking Card - Takes up 2 cols */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden">
                <div className="p-8 border-b border-stone-50">
                    <div className="flex items-center gap-3">
                        <div className="bg-brand-50 text-brand-700 p-3 rounded-xl">
                            <Truck size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-stone-900">{t.dashboard.nextBox}</h2>
                            <p className="text-stone-400 text-sm">ID: #SP-293812</p>
                        </div>
                    </div>
                </div>
                
                <div className="p-8">
                     <div className="relative">
                         <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-100 -translate-y-1/2 rounded-full"></div>
                         <div className="absolute top-1/2 left-0 w-2/3 h-1 bg-brand-500 -translate-y-1/2 rounded-full"></div>
                         
                         <div className="relative flex justify-between">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-500 border-4 border-white shadow-md flex items-center justify-center text-white">
                                    <Check size={14} strokeWidth={4} />
                                </div>
                                <span className="text-xs font-bold text-brand-700 uppercase">Preparado</span>
                            </div>
                             <div className="flex flex-col items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-500 border-4 border-white shadow-md flex items-center justify-center text-white animate-pulse">
                                    <Clock size={14} strokeWidth={3} />
                                </div>
                                <span className="text-xs font-bold text-brand-700 uppercase">En Camino</span>
                            </div>
                             <div className="flex flex-col items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-stone-200 border-4 border-white flex items-center justify-center text-stone-400">
                                    <Package size={14} />
                                </div>
                                <span className="text-xs font-bold text-stone-400 uppercase">Entregado</span>
                            </div>
                         </div>
                     </div>
                     
                     <div className="mt-8 bg-stone-50 rounded-xl p-4 flex items-center gap-4">
                        <img src="https://images.unsplash.com/photo-1543501068-1e4284561b36?w=100&h=100&fit=crop" className="w-16 h-16 rounded-lg object-cover" alt="Box" />
                        <div>
                            <p className="text-sm font-medium text-stone-900">Llegada estimada: <span className="font-bold">28 Febrero</span></p>
                            <p className="text-xs text-stone-500">GLS Tracking: 1Z999AA1012301</p>
                        </div>
                     </div>
                </div>
            </div>

            {/* Game Card */}
            <div className="lg:col-span-1 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl shadow-xl p-8 text-white relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-500 rounded-full blur-[60px] opacity-30"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full blur-[60px] opacity-20"></div>
                
                <div className="relative z-10 text-center">
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-yellow-400 mx-auto mb-6 backdrop-blur-md">
                        <Award size={32} />
                    </div>
                    <h2 className="text-2xl font-bold font-display mb-2">{t.dashboard.scratchTitle}</h2>
                    
                    {!showGame && !prizeWon ? (
                        <>
                            <p className="text-stone-300 mb-8 text-sm leading-relaxed">{t.dashboard.scratchDesc}</p>
                            <Button 
                                onClick={() => setShowGame(true)} 
                                className="bg-brand-500 hover:bg-brand-400 text-white border-none w-full shadow-lg shadow-brand-500/30"
                            >
                                {t.dashboard.playGame}
                            </Button>
                        </>
                    ) : prizeWon ? (
                        <div className="animate-fade-in py-4">
                            <p className="text-brand-300 font-bold mb-2 uppercase tracking-widest text-sm">{t.dashboard.won}</p>
                            <div className="text-3xl font-black text-white mb-6 p-4 border border-dashed border-white/20 rounded-xl bg-white/5">
                                {prizeWon}
                            </div>
                            <Button onClick={() => setPrizeWon(null)} variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full">
                                Guardar en Wallet
                            </Button>
                        </div>
                    ) : (
                        <div className="py-2">
                            <ScratchCard prize="20% OFF" lang={lang} onComplete={handleGameComplete} />
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Visual History */}
        <div>
             <h3 className="text-xl font-bold text-stone-900 mb-6">Tu Colección</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
                        <img src={`https://images.unsplash.com/photo-${i === 1 ? '1550009158-9ebf69173e03' : i === 2 ? '1596461404969-9ae70f2830c1' : i===3 ? '1606787366850-de6330128bfc' : '1583847268964-b28dc8f51f92'}?w=400&h=400&fit=crop`} alt="Past box" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                            <span className="text-white font-bold">Caja #{100+i}</span>
                            <span className="text-stone-300 text-xs">Entregado</span>
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
// Check component definition
function Check({ size, strokeWidth, ...props }: any) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={strokeWidth || 2} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
}