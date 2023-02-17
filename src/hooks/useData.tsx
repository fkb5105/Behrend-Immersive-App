import React, {useCallback, useContext, useEffect, useState} from 'react';
import Storage from '@react-native-async-storage/async-storage';

import {
  IGallery,
  ICategory,
  IProduct,
  IObjects,
  IUser,
  IUseData,
  ITheme,
} from '../constants/types';

import {
  USERS,
  WELCOME,
  OBJECTS,
  CATEGORIES,
  GALLERIES,
} from '../constants/mocks';
import {light} from '../constants';

export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<ITheme>(light);
  const [user, setUser] = useState<IUser>(USERS[0]);
  const [users, setUsers] = useState<IUser[]>(USERS);
  const [objects, setObjects] =useState<IObjects[]>(OBJECTS);
  const [welcome, setWelcome] = useState<IProduct[]>(WELCOME);
  const [categories, setCategories] = useState<ICategory[]>(CATEGORIES);
  const [galleries, setGalleries] = useState<IGallery[]>(GALLERIES);
  const [gallery, setGallery] = useState<IGallery>({});


  // handle users / profiles
  const handleUsers = useCallback(
    (payload: IUser[]) => {
      // set users / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(users)) {
        setUsers({...users, ...payload});
      }
    },
    [users, setUsers],
  );

  // handle user
  const handleUser = useCallback(
    (payload: IUser) => {
      // set user / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(user)) {
        setUser(payload);
      }
    },
    [user, setUser],
  );
  // handle objects (3-D)
  const handleObjects = useCallback(
    (payload: IObjects) => {
      // set user / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(objects)) {
        setObjects(payload);
      }
    },
    [objects, setObjects],
  );
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
    user,
    users,
    handleUsers,
    handleUser,
    objects,
    setObjects,
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
