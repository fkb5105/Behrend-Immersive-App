import React from 'react';
import dayjs from 'dayjs';
import {TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import Text from './Text';
import Block from './Block';
import Image from './Image';
import {useTheme, useTranslation} from '../hooks/';
import {IGallery} from '../constants/types';
import { ICategory } from '../constants/types';
import {useNavigation} from '@react-navigation/native';
import { GALLERIES } from '../constants/mocks';


interface IGalleryProps {  // Use the same name you've used in the component destructuring
  id: number;
  description: string;
  image: string;
  category: number[]; 
}

const Gallery = ({
  id,
  description,
  image,
  category,
}: IGalleryProps) => {
  const { t } = useTranslation();
  const { colors, gradients, icons, sizes } = useTheme();
  const navigation = useNavigation();

  const handlePress = (id: number) => {
    const gallery = GALLERIES.find((g) => g.id === id);
    if (gallery) {
      navigation.navigate('ARmap', {
        latitude: gallery.latitude,
        longitude: gallery.longitude,
        arLink: gallery.arLink,
      });
    }
  };
  if (category?.length !== 0) {
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
          {(
            <Block row align="center">
              <TouchableOpacity
                onPress={() => handlePress(id ?? 0)}>
                <Text 
                p
                color={colors.link} 
                semibold>
                Take me there  </Text>
              </TouchableOpacity>
              <Image 
              source={icons.location} 
              marginRight={sizes.s} 
              color={colors.tertiary}/>
            </Block>
          )}
        </Block>
      </TouchableWithoutFeedback>
    );
     }
   else {
      return null;
    }
};

export default Gallery;