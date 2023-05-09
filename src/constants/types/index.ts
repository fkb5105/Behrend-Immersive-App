import i18n from 'i18n-js';
import {ImageSourcePropType} from 'react-native';
import {ITheme} from './theme';
import { Key } from 'react';

export * from './components';
export * from './theme';

export interface IUser {
  id: number | string;
  name?: string;
  position?: string;
  avatar?: string;
  stats?: {posts?: number; followers?: number; following?: number};
  social?: {twitter?: string; dribbble?: string};
  about?: string;
}

export interface ICategory {
  id?: number;
  name?: string;
}
export interface IGalleryOptions {
  id?: number;
  title?: string;
  description?: string;
  type?: 'room' | 'apartment' | 'house'; // private room | entire apartment | entire house
  sleeping?: {total?: number; type?: 'sofa' | 'bed'};
  guests?: number;
  price?: number;
  user?: IUser;
  image?: string;
}
export interface IObjects {
  image_url: string;
  object_id: number;
  title?: string;
  imageURL?: string;
  link?: string;
  linkLabel?: string;
}
export interface IHistory {
  id?: number;
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
  category?: ICategory;
  image?: string;
  latitude?: number,
  longitude?: number,
  location?: ILocation;
  rating?: number;
  user?: IUser;
  offers?: IProduct[];
  options?: IGalleryOptions[];
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
  user: IUser;
  users: IUser[];
  handleUser: (data?: IUser) => void;
  setWelcome: (data?: IProduct[]) => void;
  categories: ICategory[];
  setObjects: (data?: IObjects[]) => void;
  objects: IObjects[];
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
  image?: string[];
  description?: string;
}

