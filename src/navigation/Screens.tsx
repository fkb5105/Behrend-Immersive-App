import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Gallery, Maps, Home, About, Objects} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{title: t('navigation.maps')}}
      />
      <Stack.Screen
        name="Objects"
        component={Objects}
        options={{title: t('navigation.objects')}}
      />
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{title: t('navigation.gallery')}}
      />
 
      <Stack.Screen
        name="About"
        component={About}
        options={{title: t('navigation.about')}}
      />
    </Stack.Navigator>
  );
};
