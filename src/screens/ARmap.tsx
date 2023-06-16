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
  Dimensions,
  PanResponderGestureState,
  PanResponderInstance,
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

const overlaySize = 300;

const ARMap = ({ route }: Props) => {
  const { latitude, longitude } = route.params;
  const { colors } = useTheme();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [steps, setSteps] = useState<Step[]>([]);
  const [overlayImage, setOverlayImage] = useState('');
  const [overlayPosition, setOverlayPosition] = useState({
    x: Dimensions.get('window').width / 2 - overlaySize / 2,
    y: Dimensions.get('window').height / 2 - overlaySize / 2,
  });

  const panResponder = useRef<PanResponderInstance>(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        handleOverlayTouch(gestureState);
      },
      onPanResponderRelease: () => {},
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
    setOverlayImage('');
  };

  const handleOverlayTouch = (gestureState: PanResponderGestureState) => {
    const { moveX, moveY } = gestureState;
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const positionX = Math.max(0, Math.min(moveX - overlaySize / 2, screenWidth - overlaySize));
    const positionY = Math.max(0, Math.min(moveY - overlaySize / 2, screenHeight - overlaySize));
  
    setOverlayPosition({ x: positionX, y: positionY });
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
      const apiKey = 'AIzaSyCn8voDgWTZb9QyZjtFn2McLWCnYTr5xFw'; // Replace with your Google Maps API key
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
          style={{ width: overlaySize, height: overlaySize }}
          resizeMode="contain"
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
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
        <Polyline
          coordinates={steps.flatMap((step) => decodePolyline(step.polyline))}
          strokeColor={colors.primary}
          strokeWidth={3}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.imHereButton]}
          onPress={handleImHere}
        >
          <Text h5 color={colors.white} semibold>
          I'm Here!
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.directionsButton}
          onPress={getDirections}
        >
          <Text h5 color={colors.white} semibold>
            Get Directions
        </Text>
        </TouchableOpacity>
      </View>
      {cameraVisible && hasPermission && (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          ratio={'16:9'}
        >
          <TouchableOpacity
            style={styles.cameraCloseButton}
            onPress={handleCameraClose}
          >
            <Text style={styles.cameraCloseButtonText}>X</Text>
          </TouchableOpacity>
        </Camera>
      )}
      {renderAROverlay()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
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
  cameraCloseButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    right: 20,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 3,
  },
  cameraCloseButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  overlayContainer: {
    position: 'absolute',
    width: overlaySize,
    height: overlaySize,
  },
});

export default ARMap;