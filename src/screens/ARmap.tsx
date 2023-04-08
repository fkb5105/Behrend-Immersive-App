import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Camera } from 'expo-camera';
import { useTheme } from '../hooks';
import Text from '../components/Text';

type Props = {
  route: {
    params: {
      latitude: number;
      longitude: number;
    };
  };
};

const ARMap = ({ route }: Props) => {
  const { latitude, longitude } = route.params;
  const { colors, sizes } = useTheme();
  const cameraRef = React.useRef<Camera>(null);

  const handlePress = async () => {
    try {
      const data = await cameraRef.current?.takePictureAsync();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
      <View style={styles.infoContainer}>
        <Text h3 color={colors.primary} semibold marginBottom={sizes.s}>
          AR Map
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
          activeOpacity={0.8}>
          <Text p color={colors.white} semibold>
            I'm Here!
          </Text>
        </TouchableOpacity>
      </View>
      <Camera style={StyleSheet.absoluteFillObject} ref={cameraRef} type={Camera.Constants.Type.front} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  button: {
    height: 40,
    borderRadius: 4,
    backgroundColor: '#4D9EF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default ARMap;
