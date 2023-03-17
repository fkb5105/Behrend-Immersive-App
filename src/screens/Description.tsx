import React from 'react';
import {ScrollView} from 'react-native';
import {useTranslation} from '../hooks/';
import Block from '../components/Block';
import Text from '../components/Text';
import Image from '../components/Image';
import {useTheme} from '../hooks/';

const Description = ({route}) => {
  const {t} = useTranslation();
  const {colors, gradients, sizes} = useTheme();
  const {image, description} = route.params;

  return (
    <ScrollView style={{backgroundColor: colors.background}}>
      <Block card padding={sizes.sm}>
        <Image height={170} resizeMode="cover" source={{uri: image}} />
        <Text p marginTop={sizes.m} marginBottom={sizes.sm}>
          {description}
        </Text>
        <Text p>{t('description')}</Text>
      </Block>
    </ScrollView>
  );
};

export default Description;