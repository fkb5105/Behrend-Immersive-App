import React, {useCallback, useContext, useEffect, useState} from 'react';
import Storage from '@react-native-async-storage/async-storage';

import {
  IGallery,
  ICategory,
  IProduct,
  IUseData,
  ITheme,
} from '../constants/types';

import {
  WELCOME,
  CATEGORIES,
  GALLERIES,
} from '../constants/mocks';
import {light} from '../constants';

export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<ITheme>(light);
  const [welcome, setWelcome] = useState<IProduct[]>(WELCOME);
  const [categories, setCategories] = useState<ICategory[]>(CATEGORIES);
  const [galleries, setGalleries] = useState<IGallery[]>(GALLERIES);
  const [gallery, setGallery] = useState<IGallery>({});

  // handle Gallery
  const handleGallery = useCallback(
    (payload: IGallery) => {
      // set gallery / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(gallery)) {
        setGallery(payload);
      }
    },
    [gallery, setGallery],
  );

  const contextValue = {
    theme,
    setTheme,
    welcome,
    setWelcome,
    categories,
    setCategories,
    galleries,
    setGalleries,
    handleGallery
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext) as IUseData;
