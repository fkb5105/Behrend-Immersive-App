import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Gallery from '../components/Gallery';
import { useData, useTheme } from '../hooks/';
import { IGallery, ICategory } from '../constants/types';
import { Block, Button, Text } from '../components/';
import { NavigationProp } from '@react-navigation/native';

interface GalleryScreenProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const GalleryScreen = ({ navigation }: GalleryScreenProps) => {
  const data = useData();
  const [selected, setSelected] = useState<ICategory>();
  const [galleries, setGalleries] = useState<IGallery[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { colors, gradients, sizes } = useTheme();

  // Init galleries and categories
  useEffect(() => {
    setGalleries(data?.galleries);
    setCategories(data?.categories);
    setSelected(data?.categories[0]);
  }, [data?.galleries, data?.categories]);

  // Update galleries on category change
  useEffect(() => {
    const newGalleries = data?.galleries?.filter(
      (gallery) => gallery.category && gallery.category.includes(selected?.id ?? 0),
    );

    setGalleries(newGalleries);
  }, [data?.galleries, selected]);

  const handlePress = (gallery: IGallery) => {
    navigation.navigate('ARmap', { gallery });
  };

  return (
    <Block>
      {/* Categories list */}
      <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{ x: -sizes.padding, y: 0 }}
        >
          {categories?.map((category) => {
            const isSelected = category?.id === selected?.id;
            return (
              <Button
                radius={sizes.m}
                marginHorizontal={sizes.s}
                key={`category-${category?.id}}`}
                onPress={() => setSelected(category)}
                gradient={gradients?.[isSelected ? 'primary' : 'light']}
              >
                <Text
                  p
                  bold={isSelected}
                  white={isSelected}
                  black={!isSelected}
                  marginHorizontal={sizes.m}
                >
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
        style={{ paddingHorizontal: sizes.padding }}
        contentContainerStyle={{ paddingBottom: sizes.l }}
        renderItem={({ item }) => <Gallery {...item} onPress={() => handlePress(item)} />}
      />
    </Block>
  );
};

export default GalleryScreen;
