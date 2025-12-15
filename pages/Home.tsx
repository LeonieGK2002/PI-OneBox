import React from 'react';
import { ArrowRight, Leaf, Package, PiggyBank, Smartphone, Gamepad2, Utensils, Home as HomeIcon, CheckCircle2, Star } from 'lucide-react';
import Button from '../components/Button';
import { useApp } from '../context';

const Home: React.FC = () => {
  const { t, navigate } = useApp();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background with refined overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-50 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover animate-slow-pan"
            poster="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://videos.pexels.com/video-files/5527788/5527788-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-16">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 mb-8 mx-auto">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide uppercase">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-white mb-6 text-balance leading-[1.1] drop-shadow-2xl">
              {t.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed text-balance">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button 
                onClick={() => navigate('shop')}
                size="lg" 
                variant="white"
                className="group"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 text-brand-700 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Social Proof */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl flex items-center gap-6 shadow-lg border border-white/40">
                <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" />
                </div>
                <div>
                    <div className="flex text-yellow-500 gap-0.5">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                    </div>
                    <p className="text-xs font-bold text-stone-800 mt-0.5">4.9/5 from 12k+ users</p>
                </div>
            </div>
        </div>
      </section>

      {/* Bento Grid Categories */}
      <section className="bg-stone-50 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">{t.categories.title}</h2>
                <p className="text-xl text-stone-600 font-light">{t.categories.subtitle}</p>
            </div>
            <Button onClick={() => navigate('shop')} variant="outline" className="hidden md:flex">
                Ver todo el catálogo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            {/* Tech - Large Square */}
            <div className="group md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500" onClick={() => navigate('shop')}>
                <img 
                    src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Electronics"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <div className="bg-white/10 backdrop-blur-md w-fit p-3 rounded-2xl text-white mb-4">
                        <Smartphone size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{t.categories.electronics}</h3>
                    <p className="text-stone-300 line-clamp-2">{t.categories.electronicsDesc}</p>
                </div>
            </div>

            {/* Toys - Wide Rectangle */}
            <div className="group md:col-span-2 relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500" onClick={() => navigate('shop')}>
                 <img 
                    src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Toys"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl text-white">
                            <Gamepad2 size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{t.categories.toys}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Food - Small Square */}
            <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500" onClick={() => navigate('shop')}>
                <img 
                    src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Food"
                />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-6 flex flex-col justify-between">
                     <div className="bg-white/20 backdrop-blur-md self-start p-2 rounded-xl text-white">
                        <Utensils size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{t.categories.food}</h3>
                 </div>
            </div>

            {/* Home - Small Square */}
             <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500" onClick={() => navigate('shop')}>
                <img 
                    src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Home"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-6 flex flex-col justify-between">
                     <div className="bg-white/20 backdrop-blur-md self-start p-2 rounded-xl text-white">
                        <HomeIcon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{t.categories.home}</h3>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:border-brand-200 transition-colors group">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-700 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">{t.features.sustainable}</h3>
              <p className="text-stone-500 leading-relaxed">{t.features.sustainableDesc}</p>
            </div>

            <div className="bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:border-brand-200 transition-colors group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Package size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">{t.features.surprise}</h3>
              <p className="text-stone-500 leading-relaxed">{t.features.surpriseDesc}</p>
            </div>

            <div className="bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:border-brand-200 transition-colors group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <PiggyBank size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">{t.features.value}</h3>
              <p className="text-stone-500 leading-relaxed">{t.features.valueDesc}</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Editorial Image Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-96">
        <div className="relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1543501068-1e4284561b36?w=600&h=800&fit=crop" alt="Box" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512418490979-92798cec1380?w=600&h=800&fit=crop" alt="Unboxing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        </div>
        <div className="relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&h=800&fit=crop" alt="Shoes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        </div>
        <div className="relative group overflow-hidden bg-brand-900 flex items-center justify-center p-8">
           <div className="text-center">
             <h3 className="text-3xl font-display font-bold text-white mb-4">Únete hoy</h3>
             <Button onClick={() => navigate('auth')} variant="white">Empezar</Button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;