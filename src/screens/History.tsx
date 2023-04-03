import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HISTORY } from '../constants/mocks';
import { IDescription } from '../constants/types';

const History = () => {
  const navigation = useNavigation();

  const handleHistoryOptionPress = (id: number) => {
    const description: IDescription | undefined = HISTORY.find((desc) => desc.id === id);
    if (description) {
      navigation.navigate('Description', { description });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <View style={styles.historyOptionsContainer}>
        {HISTORY.map((historyOption) => (
          <TouchableOpacity
            key={historyOption.id}
            style={styles.historyOption}
            onPress={() => handleHistoryOptionPress(historyOption.id)}
          >
            <Image source={{ uri: historyOption.imageURL }} style={styles.historyOptionImage} />
            <View style={styles.historyOptionTextContainer}>
              <Text style={styles.historyOptionTitle}>{historyOption.title}</Text>
              <Text style={styles.historyOptionDescription}>{historyOption.description}</Text>
              <Text style={styles.historyOptionLink}>{historyOption.linkLabel}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  historyOptionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  historyOption: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  historyOptionImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  historyOptionTextContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 8,
    flex: 2,
  },
  historyOptionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  historyOptionDescription: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  historyOptionLink: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default History;
