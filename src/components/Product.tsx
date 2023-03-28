import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IProduct} from '../constants/types';
import {useTheme, useTranslation} from '../hooks/';
import {Block, Text, Image} from '../components';
import { useNavigation } from '@react-navigation/native';

const Product = ({ id, image, title, type, linkLabel }: IProduct) => {
  const { t } = useTranslation();
  const { assets, colors, sizes } = useTheme();
  const navigation = useNavigation();

  const isHorizontal = type !== 'vertical';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  const onPress = () => {
    if (id === 1) {
      navigation.navigate('Maps');
    } else if (id === 2) {
      navigation.navigate('AR Gallery');
    } else if (id === 3) {
      navigation.navigate('History');
    } else if (id === 4) {
      navigation.navigate('Objects');
    } else if (id === 5) {
      navigation.navigate('About');
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Block
        card
        flex={0}
        row={isHorizontal}
        marginBottom={sizes.sm}
        width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}>
        <Image
          resizeMode="cover"
          source={{ uri: image }}
          style={{
            height: isHorizontal ? '100%' : sizes.height / 2.435,
            width: !isHorizontal ? '100%' : sizes.width / 2.435,
          }}
        />
        <Block
          paddingTop={sizes.s}
          justify="space-between"
          paddingLeft={isHorizontal ? sizes.sm : 0}
          paddingBottom={isHorizontal ? sizes.s : 0}>
          <Text p marginBottom={sizes.s}>
            {title}
          </Text>
          <Block row flex={0} align="center">
            <Text
              p
              color={colors.link}
              semibold
              size={sizes.linkSize}
              marginRight={sizes.s}>
              {linkLabel}
            </Text>
            <Image source={assets.arrow} color={colors.link} />
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default Product;