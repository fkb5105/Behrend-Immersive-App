import React from 'react';
import { Linking, LogBox, TouchableOpacity } from 'react-native';
import { StackHeaderProps, CardStyleInterpolators } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

import { useTranslation } from './useTranslation';

import Image from '../components/Image';
import Text from '../components/Text';
import useTheme from '../hooks/useTheme';
import Button from '../components/Button';
import Block from '../components/Block';

export default () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { icons, colors, gradients, sizes } = useTheme();

  const menu = {
    headerStyle: { elevation: 0 },
    headerTitleAlign: 'left',
    headerTitleContainerStyle: { marginLeft: -sizes.sm },
    headerLeftContainerStyle: { paddingLeft: sizes.s },
    headerRightContainerStyle: { paddingRight: sizes.s },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitle: ({ children }: { children: React.ReactNode }) => ( // Explicitly define the type of children
      <Text p>{children}</Text>
    ),
    headerLeft: () => (
      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image source={icons.menu} radius={0} marginRight={10} color={colors.secondary} />
      </Button>
    ),
    headerRight: () => (
      <Block row flex={0} align="center" marginRight={sizes.padding}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://var.psu.edu/');
          } }>
          <Image source={icons.VAR} radius={0} />
        </TouchableOpacity>
      </Block>
    ),
  } as unknown as StackHeaderOptions;

  const options = {
    stack: menu,
    maps: {
      ...menu,
      headerTitle: () => (
        <Text p white>
          {t('navigation.maps')}
        </Text>
      ),
      headerRight: () => null,
      headerLeft: () => (
        <Button
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image source={icons.menu} radius={0} color={colors.white} />
        </Button>
      ),
    },
    back: {
      ...menu,
      headerRight: () => null,
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()}>
          <Image
            radius={0}
            width={10}
            height={18}
            color={colors.secondary}
            source={icons.arrow}
            marginRight={20}
            transform={[{ rotate: '180deg' }]}
          />
        </Button>
      ),
    },
  };
  return options;
};
