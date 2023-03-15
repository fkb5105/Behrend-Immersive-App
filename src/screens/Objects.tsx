import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

import {OBJECTS} from '../constants/mocks';
import {IObjects} from '../constants/types/index'


const Objects: React.FC<{ data?: IObjects[] }> = ({ data = [] }) => {
  const renderObjects = () => {
    return data.map(object => {
      return (
        <TouchableOpacity
          key={object.id}
          onPress={() => Linking.openURL(Objects.link)}
          style={styles.box}>
          <Text style={styles.title}>{object.title}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(Objects.link)}>
              <Text style={styles.buttonText}>{object.linkLabel}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.container}>{renderObjects()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  box: {
    width: '48%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default Objects;