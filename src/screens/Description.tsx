import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
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
  const description: IDescription | undefined = DESCRIPTION.find(
    (desc) => desc.id === id
  );

  if (!description) {
    return <Text>No description found for ID {id}</Text>;
  }

  const { title, image, description: desc } = description;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image[0] }} style={styles.image} />
      </View>
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
  imageContainer: {
    height: 200,
    marginBottom: 16,
  },
  image: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
  },
  description: {
    color: '#000',
    fontSize: 16,
  },
});

export default Description;
