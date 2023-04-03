import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS } from '../constants/light';
import { IDescription } from '../constants/types';


type Props = {
  route: {
    params: {
      description: IDescription;
    };
  };
};

const Description: React.FC<Props> = ({ route }) => {
  const { description } = route.params;

  const [selectedDescription, setSelectedDescription] = useState<IDescription | null>(null);

  // Set the selected description once the component mounts
  React.useEffect(() => {
    setSelectedDescription(description);
  }, [description]);

  if (!selectedDescription) {
    return null; // or render a loading spinner
  }

  return (
    <View style={styles.container}>
      <Swiper style={styles.slider} showsButtons={false} showsPagination={false}>
        {selectedDescription?.image?.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
        ))}
      </Swiper>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{selectedDescription.title}</Text>
        <Text style={styles.description}>{selectedDescription.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
  },
  slider: {
    height: 250,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  description: {
    fontSize: 16,
    color: COLORS.secondary,
  },
});

export default Description;
