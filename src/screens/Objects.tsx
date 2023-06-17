import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { IObjects } from '../constants/types';
import { OBJECTS } from '../constants/mocks';
import { COLORS } from '../constants/light';


const Objects: React.FC = () => {
  
  const renderObjects = () => {
    return OBJECTS.map((object: IObjects) => {
      return (
        <TouchableOpacity key={object.id}>
          <ImageBackground source={{ uri: object.image_url }} style={styles.box}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{object.title}</Text>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText} onPress={() => Linking.openURL(object.link)}>{object.linkLabel}</Text>
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
    color: COLORS.primary,
  },
});

export default Objects;
