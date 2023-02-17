import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {useData, useTheme} from '../hooks/';
import {IGallery, ICategory} from '../constants/types';
import {Block, Button, Gallery, Text} from '../components/';

const Galleries = () => {
  const data = useData();
  const [selected, setSelected] = useState<ICategory>();
  const [galleries, setGalleries] = useState<IGallery[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const {colors, gradients, sizes} = useTheme();

  // init galleries
  useEffect(() => {
    setGalleries(data?.galleries);
    setCategories(data?.categories);
    setSelected(data?.categories[0]);
  }, [data.galleries, data.categories]);

  // update galleries on category change
  useEffect(() => {
    const category = data?.categories?.find(
      (category) => category?.id === selected?.id,
    );

    const newGalleries = data?.galleries?.filter(
      (gallery) => gallery?.category?.id === category?.id,
    );

    setGalleries(newGalleries);
  }, [data, selected, setGalleries]);

  return (
    <Block>
      {/* categories list */}
      <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: -sizes.padding, y: 0}}>
          {categories?.map((category) => {
            const isSelected = category?.id === selected?.id;
            return (
              <Button
                radius={sizes.m}
                marginHorizontal={sizes.s}
                key={`category-${category?.id}}`}
                onPress={() => setSelected(category)}
                gradient={gradients?.[isSelected ? 'primary' : 'light']}>
                <Text
                  p
                  bold={isSelected}
                  white={isSelected}
                  black={!isSelected}
                  marginHorizontal={sizes.m}>
                  {category?.name}
                </Text>
              </Button>
            );
          })}
        </Block>
      </Block>

      <FlatList
        data={galleries}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item?.id}`}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingBottom: sizes.l}}
        renderItem={({item}) => <Gallery {...item} />}
      />
    </Block>
  );
};

export default Galleries;
