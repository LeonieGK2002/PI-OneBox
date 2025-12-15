import React, { useState } from 'react';
import { useApp } from '../context';
import Button from '../components/Button';
import { BOX_PLANS } from '../constants';
import { Check, ShoppingBag, Repeat, Smartphone, Gamepad2, Utensils, Home as HomeIcon, Zap } from 'lucide-react';
import { CategoryId, BoxPlan } from '../types';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  tech: Smartphone,
  toys: Gamepad2,
  food: Utensils,
  mix: HomeIcon,
};

const CATEGORY_LABELS: Record<string, string> = {
    tech: "Tech",
    toys: "Toys",
    food: "Food",
    mix: "Mix"
};

interface ProductCardProps {
  plan: BoxPlan;
  t: any;
  onNavigate: () => void;
  isPopular?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ plan, t, onNavigate, isPopular }) => {
  const [isSubscription, setIsSubscription] = useState(true);
  const [category, setCategory] = useState<CategoryId>('mix');

  return (
    <div className={`
      relative group flex flex-col h-full bg-white rounded-3xl transition-all duration-300
      ${isPopular ? 'border-2 border-brand-500 shadow-2xl scale-[1.02] z-10' : 'border border-stone-100 shadow-lg hover:shadow-xl'}
    `}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-900 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1 shadow-lg">
           <Zap size={12} fill="currentColor" /> Best Seller
        </div>
      )}
      
      {/* Image Area */}
      <div className="h-64 overflow-hidden relative rounded-t-3xl">
        <div className="absolute inset-0 bg-stone-200 animate-pulse" />
        <img 
            src={plan.image} 
            alt={plan.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white">
             <h3 className="text-2xl font-display font-bold tracking-tight">{plan.name}</h3>
             <p className="text-white/80 text-sm font-light">{plan.size} size box</p>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Toggle Pricing */}
        <div className="flex bg-stone-100 p-1 rounded-xl mb-6">
            <button 
                onClick={() => setIsSubscription(false)}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${!isSubscription ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-900'}`}
            >
                {t.oneTime}
            </button>
            <button 
                onClick={() => setIsSubscription(true)}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${isSubscription ? 'bg-white text-brand-700 shadow-sm' : 'text-stone-500 hover:text-stone-900'}`}
            >
                {t.subscribe}
                <span className="text-[10px] bg-brand-100 text-brand-800 px-1.5 rounded-full font-bold">-15%</span>
            </button>
        </div>

        <div className="mb-6">
            <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold text-stone-900">
                    €{isSubscription ? plan.priceSubscription : plan.priceOneTime}
                </span>
                <span className="text-stone-400 font-medium line-through decoration-stone-300">
                    €{Math.round(plan.priceOneTime * 1.5)}
                </span>
            </div>
            <p className="text-sm text-stone-500 mt-1">{plan.description}</p>
        </div>

        {/* Category Icons */}
        <div className="mb-6">
             <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">{t.selectCategory}</p>
             <div className="flex justify-between gap-2">
                {(Object.keys(CATEGORY_ICONS) as CategoryId[]).map((cat) => {
                    const Icon = CATEGORY_ICONS[cat];
                    const isSelected = category === cat;
                    if (!Icon) return null;
                    return (
                         <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            title={CATEGORY_LABELS[cat]}
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                                isSelected 
                                ? 'bg-brand-900 text-white shadow-md scale-110' 
                                : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-stone-600'
                            }`}
                        >
                            <Icon size={20} strokeWidth={2} />
                        </button>
                    )
                })}
             </div>
        </div>
        
        <div className="space-y-3 mb-8 bg-stone-50/50 p-4 rounded-2xl border border-stone-100">
          {plan.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start text-sm">
              <div className="bg-brand-100 p-1 rounded-full text-brand-600 mr-3 mt-0.5">
                  <Check size={10} strokeWidth={4} />
              </div>
              <span className="text-stone-600 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <Button 
            fullWidth 
            onClick={onNavigate}
            variant={isPopular ? 'primary' : 'outline'}
            className="flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            {t.addToCart}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function Shop() {
  const { t, navigate } = useApp();
  
  return (
    <div className="min-h-screen bg-stone-50 py-32 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-100 via-stone-50 to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Tienda</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mt-2 mb-6">{t.shop.title}</h2>
          <p className="text-xl text-stone-500 font-light">{t.shop.choose}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start relative z-10">
          {BOX_PLANS.map((plan, idx) => (
            <ProductCard 
              key={plan.id} 
              plan={plan} 
              t={t.shop} 
              onNavigate={() => navigate('dashboard')} 
              isPopular={idx === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}