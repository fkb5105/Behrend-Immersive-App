import i18n from 'i18n-js';
import {ImageSourcePropType} from 'react-native';
import {ITheme} from './theme';
import { Key } from 'react';

export * from './components';
export * from './theme';

export interface IUser {
  id: number;
  image_url: string;
  linkedIn_url: string;
  name?: string;
  position?: string;
  description: string;
}

export interface IObjects {
  id: number;
  image_url: string;
  title: string;
  linkLabel: string;
  link: string;
}

export interface ICategory {
  id?: number;
  name?: string;
}
export interface IHistory {
  id?: number;
  historyOption?: number;
  title?: string;
  imageURL?: string;
  description?: string;
  linkLabel?: string;
  type: 'vertical' | 'horizontal';
}
export interface IGallery {
  id?: number;
  title?: string;
  description?: string;
  category?: number[];
  image?: string;
  arLink?: string;
  latitude?: number,
  longitude?: number,
  offers?: IProduct[];
  timestamp?: number;
  onPress?: (event?: any) => void;
}

export interface IProduct {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  timestamp?: number;
  linkLabel?: string;
  type: 'vertical' | 'horizontal';
}
export interface ILocation {
  coords?: any;
  id?: number;
  city?: string;
  country?: string;
}
export interface IUseData {
  theme: ITheme;
  setTheme: (theme?: ITheme) => void;
  setWelcome: (data?: IProduct[]) => void;
  categories: ICategory[];
  setCategories: (data?: ICategory[]) => void;
  recommendations: IGallery[];
  setRecommendations: (data?: IGallery[]) => void;
  galleries: IGallery[];
  setGalleries: (data?: IGallery[]) => void;
  gallery: IGallery;
  handleGallery: (data?: IGallery) => void;
}

export interface ITranslate {
  locale: string;
  setLocale: (locale?: string) => void;
  t: (scope?: i18n.Scope, options?: i18n.TranslateOptions) => string;
  translate: (scope?: i18n.Scope, options?: i18n.TranslateOptions) => string;
}
export interface IExtra {
  id?: number;
  name?: string;
  time?: string;
  image: ImageSourcePropType;
  saved?: boolean;
  booked?: boolean;
  available?: boolean;
  onBook?: () => void;
  onSave?: () => void;
  onTimeSelect?: (id?: number) => void;
}
export interface IDescription {
  id?: number;
  title?: string;
  caption?: string;
  image_url?: string[];
  description?: string;
}

