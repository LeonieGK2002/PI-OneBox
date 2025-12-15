import React, { useState } from 'react';
import { useApp } from '../context';
import Button from '../components/Button';
import { BOX_PLANS } from '../constants';
import { Check, ShoppingCart, Repeat, Smartphone, Gamepad2, Utensils, Home as HomeIcon } from 'lucide-react';
import { CategoryId, BoxPlan } from '../types';

// Icons map for category selector
const CATEGORY_ICONS: Record<string, React.ElementType> = {
  tech: Smartphone,
  toys: Gamepad2,
  food: Utensils,
  mix: HomeIcon, // Using Home icon for Mix/Hogar
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
}

// Sub-component to manage individual product state
const ProductCard: React.FC<ProductCardProps> = ({ plan, t, onNavigate }) => {
  const [isSubscription, setIsSubscription] = useState(false);
  const [category, setCategory] = useState<CategoryId>('mix');

  return (
    <div className={`
      relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-stone-100 flex flex-col h-full
      ${plan.size === 'medium' ? 'ring-1 ring-brand-200 lg:-translate-y-4' : ''}
    `}>
      {plan.size === 'medium' && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-500" />
      )}
      
      {/* Image */}
      <div className="h-48 overflow-hidden relative group">
        <img src={plan.image} alt={plan.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wide">
            {plan.size} size
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-stone-900">{plan.name}</h3>
        <p className="mt-2 text-stone-500 text-sm">{plan.description}</p>
        
        {/* Category Selector */}
        <div className="mt-6">
            <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-3">
                {t.selectCategory}
            </label>
            <div className="grid grid-cols-4 gap-2">
                {(Object.keys(CATEGORY_ICONS) as CategoryId[]).map((cat) => {
                    const Icon = CATEGORY_ICONS[cat];
                    const isSelected = category === cat;
                    if (!Icon) return null;
                    return (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                                isSelected 
                                ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm' 
                                : 'bg-white border-stone-200 text-stone-400 hover:border-brand-200 hover:text-stone-600'
                            }`}
                        >
                            <Icon size={20} className="mb-1" />
                            <span className="text-[10px] font-medium">{CATEGORY_LABELS[cat]}</span>
                        </button>
                    )
                })}
            </div>
        </div>

        {/* Purchase Mode Toggle */}
        <div className="mt-6 space-y-3 bg-stone-50 p-3 rounded-xl border border-stone-100">
            {/* One Time Option */}
            <label className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-colors ${!isSubscription ? 'bg-white shadow-sm ring-1 ring-stone-200' : ''}`}>
                <div className="flex items-center">
                    <input 
                        type="radio" 
                        name={`mode-${plan.id}`} 
                        checked={!isSubscription} 
                        onChange={() => setIsSubscription(false)}
                        className="w-4 h-4 text-brand-600 focus:ring-brand-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm font-medium text-stone-900">{t.oneTime}</span>
                </div>
                <span className="text-sm font-bold text-stone-900">€{plan.priceOneTime}</span>
            </label>

            {/* Subscription Option */}
            <label className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-colors ${isSubscription ? 'bg-brand-50 shadow-sm ring-1 ring-brand-200' : ''}`}>
                <div className="flex items-center">
                    <input 
                        type="radio" 
                        name={`mode-${plan.id}`} 
                        checked={isSubscription} 
                        onChange={() => setIsSubscription(true)}
                        className="w-4 h-4 text-brand-600 focus:ring-brand-500 border-gray-300"
                    />
                    <div className="ml-3 flex flex-col">
                         <span className="text-sm font-medium text-stone-900 flex items-center gap-2">
                            {t.subscribe}
                            <span className="text-[10px] bg-brand-200 text-brand-800 px-1.5 py-0.5 rounded-full">
                                -15%
                            </span>
                         </span>
                    </div>
                </div>
                <span className="text-sm font-bold text-brand-700">€{plan.priceSubscription}</span>
            </label>
        </div>

        <ul className="mt-6 space-y-3 mb-6">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-sm">
              <Check size={16} className="text-brand-500 mr-2 flex-shrink-0" />
              <span className="text-stone-600">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button 
            fullWidth 
            onClick={onNavigate}
            variant={isSubscription ? 'primary' : 'secondary'}
            className="flex items-center justify-center gap-2"
          >
            {isSubscription ? <Repeat size={18} /> : <ShoppingCart size={18} />}
            {t.addToCart}
          </Button>
          {isSubscription && (
             <p className="text-center text-xs text-stone-400 mt-2">Cancela cuando quieras.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Shop() {
  const { t, navigate } = useApp();
  
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl mb-4">{t.shop.title}</h2>
          <p className="text-xl text-stone-600">{t.shop.choose}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {BOX_PLANS.map((plan) => (
            <ProductCard 
              key={plan.id} 
              plan={plan} 
              t={t.shop} 
              onNavigate={() => navigate('dashboard')} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}