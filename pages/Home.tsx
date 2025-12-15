import React from 'react';
import { ArrowRight, Leaf, Package, PiggyBank, Smartphone, Gamepad2, Utensils, Home as HomeIcon } from 'lucide-react';
import Button from '../components/Button';
import { useApp } from '../context';

const Home: React.FC = () => {
  const { t, navigate } = useApp();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop"
          >
            {/* Using a nature/unboxing style video from Pexels (Direct link for demo purposes) */}
            <source src="https://videos.pexels.com/video-files/5527788/5527788-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-in fade-in zoom-in duration-1000">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold text-sm mb-6 tracking-wide uppercase">
              {t.hero.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
              {t.hero.title}
            </h1>
            <p className="text-xl text-stone-100 mb-10 leading-relaxed font-light drop-shadow-md">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => navigate('shop')}
                size="lg" 
                className="bg-brand-500 hover:bg-brand-600 border-none text-white shadow-xl hover:shadow-2xl shadow-brand-900/20 group"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => navigate('about' as any)} // Placeholder for now, or direct to specific page
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-stone-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">{t.categories.title}</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">{t.categories.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category: Electronics */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{t.categories.electronics}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{t.categories.electronicsDesc}</p>
            </div>

            {/* Category: Toys */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gamepad2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{t.categories.toys}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{t.categories.toysDesc}</p>
            </div>

            {/* Category: Food */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{t.categories.food}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{t.categories.foodDesc}</p>
            </div>

             {/* Category: Home */}
             <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HomeIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{t.categories.home}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{t.categories.homeDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-24 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-700 mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{t.features.sustainable}</h3>
              <p className="text-stone-500 leading-relaxed max-w-xs">{t.features.sustainableDesc}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{t.features.surprise}</h3>
              <p className="text-stone-500 leading-relaxed max-w-xs">{t.features.surpriseDesc}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <PiggyBank size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{t.features.value}</h3>
              <p className="text-stone-500 leading-relaxed max-w-xs">{t.features.valueDesc}</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Image Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 h-64 md:h-80 overflow-hidden">
        <img src="https://picsum.photos/600/800?random=10" alt="Box content" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        <img src="https://picsum.photos/600/800?random=11" alt="Happy customer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        <img src="https://picsum.photos/600/800?random=12" alt="Sustainable packaging" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        <img src="https://picsum.photos/600/800?random=13" alt="Electronics" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </section>
    </div>
  );
};

export default Home;