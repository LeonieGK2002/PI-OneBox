
export type Language = 'es' | 'en';

export type CategoryId = 'tech' | 'toys' | 'food' | 'home' | 'mix';

export type Page = 'home' | 'shop' | 'dashboard' | 'auth';

export interface User {
  id: string;
  name: string;
  email: string;
  isSubscribed: boolean;
  points: number;
}

export interface BoxPlan {
  id: string;
  name: string;
  priceOneTime: number;
  priceSubscription: number;
  description: string;
  features: string[];
  image: string;
  size: 'small' | 'medium' | 'large';
}

export interface Translation {
  nav: {
    home: string;
    shop: string;
    about: string;
    dashboard: string;
    login: string;
    logout: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    badge: string;
  };
  categories: {
    title: string;
    subtitle: string;
    electronics: string;
    electronicsDesc: string;
    toys: string;
    toysDesc: string;
    food: string;
    foodDesc: string;
    home: string;
    homeDesc: string;
  };
  features: {
    sustainable: string;
    sustainableDesc: string;
    surprise: string;
    surpriseDesc: string;
    value: string;
    valueDesc: string;
  };
  shop: {
    title: string;
    choose: string;
    subscribe: string;
    oneTime: string;
    saveText: string;
    addToCart: string;
    selectCategory: string;
  };
  dashboard: {
    welcome: string;
    nextBox: string;
    status: string;
    playGame: string;
    scratchTitle: string;
    scratchDesc: string;
    won: string;
  };
}
