import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { GALLERIES } from '../constants/mocks';
import { styles } from './styles';

export default function ARmap({ route }) {
  const { id } = route.params;
  const gallery = GALLERIES.find((g) => g.id === id);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [region, setRegion] = useState({
    latitude: gallery.latitude,
    longitude: gallery.longitude,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
  });
  const mapView = useRef(null);

  const handleTakeMeTherePress = () => {
    mapView.current.animateToRegion(region, 2000);
  };

  const handleHerePress = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const handleCameraPress = () => {
    setCameraOpen(!cameraOpen);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} ref={mapView} />
      <TouchableOpacity style={styles.takeMeThereButton} onPress={handleTakeMeTherePress}>
        <Text style={styles.takeMeThereText}>Take me there</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.hereButton} onPress={handleHerePress}>
        <MaterialIcons name="my-location" size={24} color="white" />
      </TouchableOpacity>
      {cameraOpen && <Camera style={styles.camera} type={Camera.Constants.Type.back} />}
    </View>
  );
}
