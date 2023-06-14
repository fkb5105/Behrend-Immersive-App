import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Linking } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { useTheme } from '../hooks';
import { COLORS, GRADIENTS } from '../constants/light';
import Text from '../components/Text';
import { Camera } from 'expo-camera';
import axios from 'axios';

type Props = {
  route: {
    params: {
      latitude: number;
      longitude: number;
    };
  };
};

interface Step {
  distance: string;
  duration: string;
  instructions: string;
  polyline: string;
}

const ARmap = ({ route }: Props) => {
  const { latitude, longitude } = route.params;
  const { colors } = useTheme();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [steps, setSteps] = useState<Step[]>([]);

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
    const interval = setInterval(() => {
      if (location) {
        updateCurrentLocation();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [location]);

  const updateCurrentLocation = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  const handleImHere = () => {
    setCameraVisible(true);
  };
  const handleCameraClose = () => {
    setCameraVisible(false);
  };
  
  // Rest of the code...

  const openDirections = () => {
    if (location) {
      const origin = `${location.coords.latitude},${location.coords.longitude}`;
      const destination = `${latitude},${longitude}`;
      const apiKey = 'AIzaSyCn8voDgWTZb9QyZjtFn2McLWCnYTr5xFw';
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=walking&key=${apiKey}`;
  
      axios
        .get(url)
        .then((response) => {
          const route = response.data.routes[0];
          const legs = route.legs;
          const steps = legs.flatMap((leg: any) =>
            leg.steps.map((step: any) => ({
              distance: step.distance.text,
              duration: step.duration.text,
              instructions: step.html_instructions.replace(/<[^>]+>/g, ''),
              polyline: step.polyline.points,
            }))
          );
          setSteps(steps);
        })
        .catch((error) => {
          console.log('Error fetching directions:', error);
        });
    }
  };
  

  if (!location) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
        <Marker
  coordinate={{
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  }}
/>

{steps.map((step, index) => (
  <Polyline
    key={index}
    coordinates={decodePolyline(step.polyline)}
    strokeWidth={3}
    strokeColor={colors.secondary}
  />
))}

      </MapView>
  
      <TouchableOpacity style={styles.directionsButton} onPress={openDirections} activeOpacity={0.8}>
        <Text h5 color={colors.white} semibold>
          Get Directions
        </Text>
      </TouchableOpacity>
  
      {cameraVisible && hasPermission && (
        <Camera style={styles.camera} type={type}>
          <TouchableOpacity style={styles.cameraCloseButton} onPress={handleCameraClose}>
            <Text h5 color={colors.white} semibold>
              Close
            </Text>
          </TouchableOpacity>
        </Camera>
      )}
  
      <TouchableOpacity style={styles.cameraButton} onPress={handleImHere} activeOpacity={0.8}>
        <Text h5 color={colors.white} semibold>
          I'm Here!
        </Text>
      </TouchableOpacity>
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
  directionsButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: 'rgba(0, 30, 68, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: 'rgba(0, 30, 68, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Ensure the button is above the camera view
  },
  
  cameraCloseButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 30, 68, 0.5)',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    top: 10,
    transform: [{ translateX: -50 }],
  },
});

// Helper function to decode Google Maps polyline
const decodePolyline = (encoded: string) => {
  const poly = [];
  let index = 0,
    len = encoded.length;
  let lat = 0,
    lng = 0;

  while (index < len) {
    let b,
      shift = 0,
      result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    poly.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
  }

  return poly;
};

export default ARmap;
        