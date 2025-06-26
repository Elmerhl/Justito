export interface TranslatedText {
  es: string;
  en: string;
  pt: string;
  qu: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  defaultPortions: number;
  image: string;
  ingredients: Ingredient[];
  steps: string[];
  videoUrl: string;
  videoCredit?: string;
}

export interface Suggestion {
  id: string;
  name: string;
  description: string;
  image: string;
  votosSi: number;
  votosNo: number;
}