import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useTheme } from '../hooks';
import Text from '../components/Text';
import { Camera } from 'expo-camera';

type Props = {
  route: {
    params: {
      latitude: number;
      longitude: number;
    };
  };
};

const ARmap = ({ route }: Props) => {
  const { latitude, longitude } = route.params;
  const { colors, sizes } = useTheme();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (location) {
      const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
      const latLng = `${latitude},${longitude}`;
      const url = Platform.select({
        ios: `${scheme}${latLng}`,
        android: `${scheme}${latLng}(${encodeURIComponent('Custom Label')})`,
      }) || '';

      Linking.openURL(url);
    }
  }, [location]);

  const handleImHere = () => {
    setCameraVisible(true);
  };

  const handleCameraClose = () => {
    setCameraVisible(false);
  };

  if (!location) {
    return null;
  }

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
        <Marker coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }} />
      </MapView>
      <TouchableOpacity style={styles.cameraButton} onPress={handleImHere} activeOpacity={0.8}>
        <Text p color={colors.white} semibold>
          I'm Here!
        </Text>
      </TouchableOpacity>
      {cameraVisible && hasPermission && (
        <Camera style={styles.camera} type={type}>
          <TouchableOpacity style={styles.cameraCloseButton} onPress={handleCameraClose}>
            <Text p color={colors.white} semibold>
              Close
            </Text>
          </TouchableOpacity>
        </Camera>
      )}
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
  cameraButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'blue',
  },
  camera: {
    flex: 1,
  },
  cameraCloseButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
    alignItems: 'center',
    },
    });
    
    export default ARmap;