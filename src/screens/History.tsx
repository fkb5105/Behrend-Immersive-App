import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HISTORY } from '../constants/mocks';
import { useTheme } from '../hooks';
import { IDescription } from '../constants/types';

const History = () => {
  const navigation = useNavigation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
 
  const handleHistoryOptionPress = (id: number | undefined) => {
    if (id) {
      const description = HISTORY.find((desc) => desc.id === id);
      if (description) {
        navigation.navigate('Description', description);
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.historyOptionsContainer}>
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
              <TouchableOpacity
                style={styles.historyOptionButton}
                onPress={() => handleHistoryOptionPress(historyOption.id)}
              >
                <Text style={styles.historyOptionButtonText}>Learn more</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    alignItems: 'stretch',
    flexGrow: 1,
  },
  historyOption: {
    flex: 1,
    height: 150,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  historyOptionImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
  },
  historyOptionTextContainer: {
    flex: 2,
    padding: 8,
  },
  historyOptionTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  historyOptionDescription: {
    color: '#000',
    fontSize: 16,
    marginBottom: 16,
  },
  historyOptionButton: {
    backgroundColor: '#1E407C',
    padding: 8,
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  historyOptionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default History;