import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { COLORS } from '../constants/light';

interface ObjectsInfo {
  object_id: number;
  title: string;
  image_url: string;
  linkLabel: string;
  link: string;
}

const Objects: React.FC = () => {
  const [objectsData, setObjectsData] = useState<ObjectsInfo[]>([]);

  async function fetchObjectsData() {
    try {
      const response = await fetch('http://10.0.0.6:3000/objects');
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Data:', data);
      setObjectsData(data);
    } catch (error) {
      console.error('Error fetching objects data:', error);
    }
  }

  useEffect(() => {
    fetchObjectsData();
  }, []);

  const renderObjects = () => {
    return objectsData.map((object) => {
      return (
        <TouchableOpacity key={object.object_id} onPress={() => Linking.openURL(object.link)}>
          <ImageBackground source={{ uri: object.image_url }} style={styles.box}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{object.title}</Text>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{object.linkLabel}</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    });
  };

  return <ScrollView contentContainerStyle={styles.container}>{renderObjects()}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  box: {
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default Objects;
