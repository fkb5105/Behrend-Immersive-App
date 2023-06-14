import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HISTORY } from '../constants/mocks';
import { useTheme } from '../hooks';
import { IDescription } from '../constants/types';
import { COLORS, GRADIENTS } from '../constants/light';

const History = () => {
  const navigation = useNavigation();
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  // State variables
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState<number | null>(null);

  const handleHistoryOptionPress = (id: number | null) => {
    if (id === null) {
      // Close the popup
      setIsPopupOpen(false);
      setSelectedId(null);
    } else if (id === 4) {
      // Open the popup
      setIsPopupOpen(true);
      setSelectedId(4);
    } else {
      // Navigate to the description page
      setIsPopupOpen(false);
      setSelectedId(id);
      const description = HISTORY.find((desc) => desc.id === id);
      if (description) {
        navigation.navigate('Description', description);
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.historyOptionsContainer}>
        {HISTORY.map((historyOption) => {
          const id = historyOption.id as number;

          if (!isPopupOpen) {
            // Render the original options (IDs 1 to 4)
            if (id >= 1 && id <= 4) {
              return (
                <TouchableOpacity
                  key={id}
                  style={styles.historyOption}
                  onPress={() => handleHistoryOptionPress(id)}
                >
                  <Image source={{ uri: historyOption.imageURL }} style={styles.historyOptionImage} />
                  <View style={styles.historyOptionTextContainer}>
                    <Text style={styles.historyOptionTitle}>{historyOption.title}</Text>
                    <Text style={styles.historyOptionDescription}>{historyOption.description}</Text>
                    <TouchableOpacity
                      style={styles.historyOptionButton}
                      onPress={() => handleHistoryOptionPress(id)}
                    >
                      <Text style={styles.historyOptionButtonText}>Learn more</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            } else if (isPopupOpen && id >= 5 && id <= 8) {
              return null; // Skip rendering IDs 5 to 8 in the background when the popup is open
            } else if (isPopupOpen && id === 4) {
              // Render ID 4 as a separate component when the popup is open
              return (
                <TouchableOpacity
                  key={id}
                  style={styles.historyOption}
                  onPress={() => handleHistoryOptionPress(id)}
                >
                  <Image source={{ uri: historyOption.imageURL }} style={styles.historyOptionImage} />
                  <View style={styles.historyOptionTextContainer}>
                    <Text style={styles.historyOptionTitle}>{historyOption.title}</Text>
                    <Text style={styles.historyOptionDescription}>{historyOption.description}</Text>
                    <TouchableOpacity
                      style={styles.historyOptionButton}
                      onPress={() => handleHistoryOptionPress(id)}
                    >
                      <Text style={styles.historyOptionButtonText}>Learn more</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );            
            }
          }

          return null;
        })}
      </ScrollView>

      {isPopupOpen && selectedId === 4 && (
  <Modal animationType="slide" transparent={true}>
    <View style={styles.popupContainer}>
      <View style={styles.popupContent}>
        <Text style={styles.popupText}>More Options:</Text>
        <ScrollView>
          {HISTORY.map((historyOption) => {
            const id = historyOption.id as number;
            if (id >= 5 && id <= 8) {
              return (
                <TouchableOpacity
                  key={id}
                  style={styles.popupOption}
                  onPress={() => handleHistoryOptionPress(id)}
                >
                  <Image source={{ uri: historyOption.imageURL }} style={styles.historyOptionImage} />
                  <View style={styles.historyOptionTextContainer}>
                    <Text style={styles.historyOptionTitle}>{historyOption.title}</Text>
                    <Text style={styles.historyOptionDescription}>{historyOption.description}</Text>
                    <TouchableOpacity
                      style={styles.historyOptionButton}
                      onPress={() => handleHistoryOptionPress(id)}
                    >
                      <Text style={styles.historyOptionButtonText}>{historyOption.linkLabel}</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }
            return null;
          })}
        </ScrollView>
        <Pressable style={styles.closeButton} onPress={() => handleHistoryOptionPress(null)}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  historyOptionsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  historyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    flex: 1,
    borderWidth: 1, 
    borderRadius: 20, 
    borderColor: 'lightgray', 
    backgroundColor: COLORS.white,
    shadowColor: 'black', 
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 4, 
    elevation: 2, 
  },
  historyOptionImage: {
    width: 100, 
    height: 100, 
    marginRight: 16,
    borderRadius: 8, 
  },
  historyOptionTextContainer: {
    flex: 1,
  },
  historyOptionTitle: {
    fontSize: 18, // Increased font size
    fontWeight: 'bold',
    marginBottom: 4,
  },
  historyOptionDescription: {
    fontSize: 16, 
    marginBottom: 8,
  },
  historyOptionButton: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  historyOptionButtonText: {
    color: 'white',
    fontSize: 14, 
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    maxHeight: '70%',
  },
  popupText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  popupOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  popupOptionImage: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  popupOptionTextContainer: {
    flex: 1,
  },
  popupOptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  popupOptionDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  popupOptionButton: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  popupOptionButtonText: {
    color: 'white',
    fontSize: 12,
  },
  closeButton: {
    marginTop: 16,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: COLORS.primary,
  },
});


export default History;
