import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import { IDescription } from '../constants/types';
import { DESCRIPTION } from '../constants/mocks';

type DescriptionProps = {
  route: {
    params: {
      id: number;
    };
  };
};

const Description: React.FC<DescriptionProps> = ({ route }) => {
  const { id } = route.params;
  const description: IDescription | undefined = DESCRIPTION.find((desc) => desc.id === id);

  if (!description) {
    return <Text>No description found for ID {id}</Text>;
  }

  const { title, image_url, description: desc } = description;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={image_url}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={{ uri: item }} style={styles.image} resizeMode="contain" />
          </View>
        )}
      />
      <Text style={styles.description}>{desc}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width - 32,
    resizeMode: 'contain',
  },
  description: {
    color: '#000',
    fontSize: 16,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Description;
