import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
  Image,
  Animated,
  PanResponder,
  ViewStyle,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { useTheme } from '../hooks';
import Text from '../components/Text';
import { Camera } from 'expo-camera';
import axios from 'axios';
import { GALLERIES } from '../constants/mocks';
import { COLORS } from '../constants/light';

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

const ARMap = ({ route }: Props) => {
  const { latitude, longitude } = route.params;
  const { colors } = useTheme();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [steps, setSteps] = useState<Step[]>([]);
  const [overlayImage, setOverlayImage] = useState('');
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
  const [overlaySize, setOverlaySize] = useState({ width: 0, height: 0 });
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        setOverlayPosition({
          x: gestureState.moveX - overlaySize.width / 2,
          y: gestureState.moveY - overlaySize.height / 2,
        });
      },
    })
  ).current;

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
    openAROverlay();
  };

  const handleCameraClose = () => {
    setCameraVisible(false);
  };

  const handleOverlayTouch = (_: any, gestureState: { moveX: any; moveY: any; }) => {
    const { moveX, moveY } = gestureState;
    setOverlayPosition({
      x: moveX - overlaySize.width / 2,
      y: moveY - overlaySize.height / 2,
    });
  };

  const decodePolyline = (encoded: string) => {
    const points = [];
    let index = 0,
      len = encoded.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return points;
  };

  const getDirections = () => {
    if (location) {
      const origin = `${location.coords.latitude},${location.coords.longitude}`;
      const destination = `${latitude},${longitude}`;
      const apiKey = '<YOUR_API_KEY>'; // Replace with your Google Maps API key
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

  const openAROverlay = () => {
    const arLink = GALLERIES[0]?.arLink;
    if (arLink) {
      setOverlayImage(arLink);
      setOverlaySize({ width: 200, height: 200 });
      setOverlayPosition({ x: 100, y: 100 });
    }
  };

  const renderAROverlay = () => {
    const overlayStyle = {
      transform: [
        { translateX: overlayPosition.x },
        { translateY: overlayPosition.y },
      ],
    } as Animated.WithAnimatedObject<ViewStyle>;

    return (
      <Animated.View
        style={[styles.overlayContainer, overlayStyle]}
        {...panResponder.panHandlers}
      >
        <Image
          source={{ uri: overlayImage }}
          style={{ width: overlaySize.width, height: overlaySize.height }}
        />
      </Animated.View>
    );
  };
  const cameraRef = useRef(null);

  if (!location) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} />
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
      <TouchableOpacity style={styles.imHereButton} onPress={handleImHere}>
      <Text h5 color={colors.white} semibold>
          I'm Here!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.directionsButton} onPress={getDirections}>
      <Text h5 color={colors.white} semibold>
          Get Directions
        </Text>
      </TouchableOpacity>
      {cameraVisible && (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.cameraContent}>
            <TouchableOpacity style={styles.closeButton} onPress={handleCameraClose}>
            <Text h5 color={colors.white} semibold>
              X
            </Text>
            </TouchableOpacity>
            {renderAROverlay()}
          </View>
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
  imHereButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: 'rgba(0, 30, 68, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  cameraContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 30, 68, 0.5)',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: -30,
    top: 10,
    transform: [{ translateX: -50 }],
  },
  overlayContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ARMap;
