import * as Localization from 'expo-localization';
import Storage from '@react-native-async-storage/async-storage';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import translations from '../constants/translations/';
import { ITranslate } from '../constants/types';

// Define type for i18n object
interface I18nType {
  locale: string;
  translations: any; // Adjust this type based on your translations object structure
  fallbacks: boolean;
  t(scope: string, options?: { [key: string]: any }): string;
}

// Declare i18n object with defined type
const i18n: I18nType = {
  locale: 'en',
  translations: translations,
  fallbacks: true,
  t: (scope, options) => {
    const keys = scope.split('.');
    let value: any = translations;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // If the key doesn't exist in translations, return an empty string
        value = '';
        break;
      }
    }
  
    // Extract the last part of the scope string
    const lastPartIndex = scope.lastIndexOf('.');
    let lastPart = lastPartIndex !== -1 ? scope.slice(lastPartIndex + 1) : scope;
    
    // Capitalize the first letter of the last part
    lastPart = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  
    // Handle options if provided (placeholders in translation)
    if (options && typeof value === 'string') {
      for (const key in options) {
        value = value.replace(new RegExp(`{{${key}}}`, 'g'), options[key]);
      }
    }
  
    // Return the last part of the scope string
    return value || lastPart;
  },
  
    
};

export const TranslationContext = React.createContext({});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState('en');

  // Set the locale once at the beginning of your app.
  i18n.locale = locale;

  const t = useCallback(
    (scope: string, options?: { [key: string]: any }) => {
      return i18n.t(scope, { ...options, locale });
    },
    [locale],
  );

  // get locale from storage
  const getLocale = useCallback(async () => {
    // get preference from storage
    const localeJSON = await Storage.getItem('locale');

    // set Locale / compare if has updated
    setLocale(localeJSON !== null ? localeJSON : Localization.locale);
  }, [setLocale]);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  useEffect(() => {
    // save preference to storage
    Storage.setItem('locale', locale);
  }, [locale]);

  const contextValue = {
    t,
    locale,
    setLocale,
    translate: t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () =>
  useContext(TranslationContext) as ITranslate;
