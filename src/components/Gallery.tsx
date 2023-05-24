import React from 'react';
import dayjs from 'dayjs';
import {TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import Text from './Text';
import Block from './Block';
import Image from './Image';
import {useTheme, useTranslation} from '../hooks/';
import {IGallery} from '../constants/types';
import {useNavigation} from '@react-navigation/native';
import { GALLERIES } from '../constants/mocks';

const Gallery = ({
  id,
  description,
  image,
  category,
  rating,
  location,
}: IGallery) => {
  const {t} = useTranslation();
  const {colors, gradients, icons, sizes} = useTheme();

  const navigation = useNavigation();

  const handlePress = (id: number) => {
    const gallery = GALLERIES.find(g => g.id === id);
    if (gallery) {
      navigation.navigate('ARmap', {
        latitude: gallery.latitude,
        longitude: gallery.longitude,
      });
    }
  }; 
  if (category?.id !== 0) {
    return (
      <TouchableWithoutFeedback>
        <Block card padding={sizes.sm} marginTop={sizes.sm}>
          <Image height={170} resizeMode="cover" source={{uri: image}} />
          {/* gallery category */}
          {category?.name && (
            <Text
              h5
              bold
              size={13}
              marginTop={sizes.s}
              transform="uppercase"
              marginLeft={sizes.xs}
              gradient={gradients.primary}>
              {category?.name}
            </Text>
          )}

          {/* gallery description */}
          {description && (
            <Text
              p
              marginTop={sizes.s}
              marginLeft={sizes.xs}
              marginBottom={sizes.sm}>
              {description}
            </Text>
          )}

          {/* location & rating */}
          {(Boolean(location) || Boolean(rating)) && (
            <Block row align="center">
              <Text p size={12} semibold>
                {location?.city}, {location?.country}
              </Text>
              <Text p bold marginHorizontal={sizes.s}>
                •
              </Text>
              <Image 
              source={icons.location} 
              marginRight={sizes.s} 
              color={colors.tertiary}/>
              <TouchableOpacity
                onPress={() => handlePress(id ?? 0)}>
                <Text 
                p
                color={colors.link} 
                semibold>
                Take me there</Text>
              </TouchableOpacity>
            </Block>
          )}
        </Block>
      </TouchableWithoutFeedback>
    );
  }
};

export default Gallery;