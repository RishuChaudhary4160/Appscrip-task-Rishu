export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FilterState {
  customizable: boolean;
  idealFor:any;
  occasion: string[];
  work: string[];
  fabric: string[];
  segment: string[];
  suitableFor: string[];
  rawMaterials: string[];
  pattern: string[];
}

export type SortOption = 'recommended' | 'newest' | 'popular' | 'price-low' | 'price-high';