import React, { useState, useEffect } from 'react';
import { useApp } from '../context';
import ScratchCard from '../components/ScratchCard';
import { Truck, Award } from 'lucide-react';
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
    // In a real app, this would make an API call to save the win
    setTimeout(() => {
        setPrizeWon("20% OFF NEXT BOX");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Welcome Banner */}
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <h1 className="text-3xl font-bold text-stone-900">{t.dashboard.welcome}, {user.name}</h1>
                <p className="text-stone-500 mt-1">Suscripción Activa: <span className="text-brand-600 font-semibold">Green Standard</span></p>
            </div>
            <div className="flex gap-4">
                <div className="text-center px-6 py-3 bg-stone-50 rounded-xl">
                    <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold">Puntos</p>
                    <p className="text-2xl font-bold text-brand-700">{user.points}</p>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Tracking Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <Truck size={24} />
                    </div>
                    <h2 className="text-xl font-bold text-stone-900">{t.dashboard.nextBox}</h2>
                </div>
                
                <div className="relative pt-6 pb-2">
                     <div className="flex justify-between mb-2 text-sm font-medium text-stone-500">
                        <span>Preparación</span>
                        <span className="text-brand-600">En Camino</span>
                        <span>Entregado</span>
                     </div>
                     <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-500 w-2/3 rounded-full relative">
                            <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/30 animate-pulse"></div>
                        </div>
                     </div>
                     <p className="mt-4 text-center text-stone-600 bg-stone-50 py-2 rounded-lg text-sm">
                        Llegada estimada: <span className="font-bold text-stone-900">28 Feb</span>
                     </p>
                </div>
            </div>

            {/* Game Card */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
                
                <div className="flex items-center space-x-3 mb-4">
                     <div className="p-2 bg-white/10 rounded-lg text-yellow-400">
                        <Award size={24} />
                    </div>
                    <h2 className="text-xl font-bold">{t.dashboard.scratchTitle}</h2>
                </div>

                {!showGame && !prizeWon ? (
                    <div className="text-center py-6">
                        <p className="text-stone-300 mb-6">{t.dashboard.scratchDesc}</p>
                        <Button 
                            onClick={() => setShowGame(true)} 
                            className="bg-brand-500 hover:bg-brand-400 text-white border-none w-full"
                        >
                            {t.dashboard.playGame}
                        </Button>
                    </div>
                ) : prizeWon ? (
                     <div className="text-center py-6 animate-in zoom-in">
                        <p className="text-2xl font-bold text-brand-400 mb-2">{t.dashboard.won}</p>
                        <div className="text-4xl font-black text-white mb-4 tracking-wider border-2 border-dashed border-white/20 p-4 rounded-xl bg-white/5">
                            {prizeWon}
                        </div>
                        <p className="text-sm text-stone-400">Aplicado automáticamente a tu próxima caja.</p>
                    </div>
                ) : (
                    <div className="py-2">
                        <ScratchCard prize="20% OFF" lang={lang} onComplete={handleGameComplete} />
                    </div>
                )}
            </div>
        </div>

        {/* History Grid */}
        <div>
             <h3 className="text-lg font-bold text-stone-900 mb-4">Historial de Cajas</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="group relative rounded-xl overflow-hidden aspect-square">
                        <img src={`https://picsum.photos/300/300?random=${i+20}`} alt="Past box" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-medium text-sm">Ver detalles</span>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-stone-800">
                            Enero 2024
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