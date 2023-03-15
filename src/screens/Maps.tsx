import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { ASSETS } from '../constants/theme';

const mapImageOne = ASSETS.photo1;
const mapImageTwo = ASSETS.photo2;

const Maps = () => {
  const [isMapOne, setIsMapOne] = useState(true);

  const toggleMap = () => {
    setIsMapOne(!isMapOne);
  };

  const mapImage = isMapOne ? mapImageOne : mapImageTwo;
  const mapName = isMapOne ? "Present" : "Past";

  return (
    <View style={styles.container}>
      <Image source={mapImage} style={styles.mapImage} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleMap}>
          <Text style={styles.buttonText}>{mapName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
  },
  button: {
    backgroundColor: 'white',
    width: 100,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Maps;