import { ASSETS } from '../constants/theme';
import SvgUri from 'react-native-svg-uri';
import { View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

const Maps = () => {
  const [map, setMap] = useState(ASSETS.map);

  const handleMapToggle = () => {
    if (map === ASSETS.map) {
      setMap(ASSETS.map2);
    } else {
      setMap(ASSETS.map);
    }
  };

  return (
    <View style={styles.container}>
      <SvgUri width="100%" height="100%" source={map} />
      <TouchableOpacity style={styles.button} onPress={handleMapToggle}>
        <Text style={styles.buttonText}>Toggle Map</Text>
      </TouchableOpacity>
    </View>
  );
};





