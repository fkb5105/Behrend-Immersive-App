import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { ASSETS } from '../constants/theme';
import { COLORS } from '../constants/light';

const mapImageOne = ASSETS.photo1;
const mapImageTwo = ASSETS.photo2;

const Maps = () => {
  const [isMapOne, setIsMapOne] = useState(true);

  const toggleMap = () => {
    setIsMapOne(!isMapOne);
  };

  const mapImage = isMapOne ? mapImageOne : mapImageTwo;
  const mapName = isMapOne ? 'Present' : 'Past';

  return (
    <ScrollView
      maximumZoomScale={4}
      contentContainerStyle={styles.container}
      centerContent
      pinchGestureEnabled
    >
      <Image source={mapImage} style={styles.mapImage} resizeMode="contain" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleMap}>
          <Text style={styles.buttonText}>{mapName}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    width: 120,
    height: 60,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Maps;
